import logging

import click
import torch

from huggingface_hub import hf_hub_download
from langchain.chains import RetrievalQA

from langchain.llms import HuggingFacePipeline, LlamaCpp


import os
from langchain.embeddings import HuggingFaceInstructEmbeddings
from langchain.chains import RetrievalQA
from langchain.document_loaders import PyPDFLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.llms import OpenAI
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import Chroma

from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    GenerationConfig,
    LlamaForCausalLM,
    LlamaTokenizer,
    pipeline,
)

from constants import CHROMA_SETTINGS, EMBEDDING_MODEL_NAME, PERSIST_DIRECTORY, MODEL_ID, MODEL_BASENAME






# chose device typ to run on as well as to show source documents.
@click.command()
@click.option(
    "--device_type",
    default="cuda" if torch.cuda.is_available() else "cpu",
    type=click.Choice(
        [
            "cpu",
            "cuda",
            "ipu",
            "xpu",
            "mkldnn",
            "opengl",
            "opencl",
            "ideep",
            "hip",
            "ve",
            "fpga",
            "ort",
            "xla",
            "lazy",
            "vulkan",
            "mps",
            "meta",
            "hpu",
            "mtia",
        ],
    ),
    help="Device to run on. (Default is cuda)",
)
@click.option(
    "--show_sources",
    "-s",
    is_flag=True,
    help="Show sources along with answers (Default is False)",
)



def main(device_type, show_sources):
    # embeddings = OpenAIEmbeddings()
    embeddings = HuggingFaceInstructEmbeddings(model_name=EMBEDDING_MODEL_NAME, model_kwargs={"device": device_type})
    index_path = "/DB"
    
    # Load the existing index or create a new one if it doesn't exist
    if not os.path.exists(index_path):
        db = Chroma(
            persist_directory=PERSIST_DIRECTORY,
            embedding_function=embeddings,
            client_settings=CHROMA_SETTINGS,
        )
        # Save the index
        db.persist()
    else:
        db = Chroma.load(index_path)
        
    retriever = db.as_retriever(search_type="similarity", search_kwargs={"k": 2})

    qa = RetrievalQA.from_chain_type(
        llm=OpenAI(),
        chain_type="stuff",
        retriever=retriever,
        return_source_documents=True,
    )
    
    while True:
        query = input("\nEnter a query: ")
        if query == "exit":
            break
        # Get the answer from the chain
        res = qa(query)
        answer = res["result"]

        # Print the result
        # print("\n\n> Question:")
        # print(query)
        print("\n> Answer:")
        print(answer)

if __name__ == "__main__":
    logging.basicConfig(
        format="%(asctime)s - %(levelname)s - %(filename)s:%(lineno)s - %(message)s", level=logging.INFO
    )
    main()