import React from 'react';
import '../../App.css';
import './Education.css';




export default function Education() {
  return (
    <><h1 className='projects'>EDUCATION</h1><div className="education-main">
      <div className="EDU_WRAP">
        <div className="ASU">
          <img src={process.env.PUBLIC_URL + "/images/asu.jpg"} />
          {/* <img src="/images/asu.jpg"></img> */}
          <div>
            <h3>Arizona State University &middot; Master's in Robotics and Autonomous Systems Engineering </h3>
            <b> Aug 2022 -May 2024</b>
            <hr/>
            <div className= "Projects">
              <div className="project-item">
                <h2>Stereo Image Depth Estimation using U-Net feature extraction.</h2>
                <p>Developed stereo depth estimation on the KITTI2012 dataset using U-Net feature extraction and conducted experiments to finetune the results by optimizing the hyperparameters.Improved the feature extraction of base model using qualitative results and reduced the loss of validation data by 14%</p>
                <figure>
                  <img src={process.env.PUBLIC_URL + "/images/perception.png"} />
                  {/* <img src="images/perception.png"></img> */}
                  <figcaption>Original Image- Feature Extraction - Segmented result</figcaption>
                </figure>
                {/* <p>Visualization of the Stereo Image Depth Estimation results using U-Net feature extraction. The model accurately estimates depth information from stereo image pairs, enabling advanced perception capabilities for autonomous systems and computer vision applications.</p> */}
                <p>The primary objective is to create a model capable of accurately determining the distance of objects from a stereo image pair, enhancing the perception capabilities of computer vision systems.The project involves conducting various experiments to fine-tune the results by optimizing hyperparameters. By analyzing the qualitative results, improvements are made to the feature extraction process of the base model. As a result, the validation data's loss is significantly reduced by approximately 14%, signifying enhanced accuracy and reliability.</p>
              </div>
            </div>
            <div className= "Projects">
              <div className="project-item">
                <h2>Propaganda Detection on news articles.</h2>
                <p>Developed language classification models that can identify propaganda techniques used in news article and conducted comparative analysis of LSTM, BERT and RoBERTa models. Project focuses on developing advanced language classification models to identify propaganda techniques used in news articles. The primary objective is to create sophisticated algorithms capable of automatically detecting and classifying instances of propaganda content within news articles.

To achieve this, the project involves conducting a comprehensive comparative analysis of three popular language models: LSTM, BERT, and RoBERTa. These models are evaluated based on their ability to recognize and classify propaganda techniques effectively.

After analyzing the results, a key finding is that the pre-trained BERT model outperforms the other models significantly, demonstrating a 4.5% higher F1 score. This indicates that the BERT model shows superior precision and recall in identifying propaganda content, making it the preferred choice for this specific task.</p>

              </div>
            </div>
            <div className= "Projects">
              <div className="project-item">
                <h2>Fashion Outfit Generation using Machine Learning Recommendation.</h2>
                <p>Developed a recommendation system using a bidirectional LSTM model on the Polyvore dataset to suggest a suitable combination of fashion outfits.Improved AUC score to .829 using Resnet50 feature extraction on image dataset over state of art Inception_v3 model.</p>
                <figure>
                  <img src={process.env.PUBLIC_URL + "/images/recom.png"} />
                  {/* <img src="images/recom.png"></img> */}
                  <figcaption>Fashion Recommendation</figcaption>
                </figure>
              </div>
            </div>
            <div className= "Projects">
              <div className="project-item">
                <h2>Self-Balancing Motorcycle</h2>
                <p>The "Self-Balancing Motorcycle" project involves the development of an innovative and autonomous self-balancing motorcycle using an Arduino Nano 33 IoT board in MATLAB. The primary objective of this project is to design and implement a state space model using Simulink, allowing the motorcycle to maintain its balance in various conditions.The PD Controller is responsible for continuously adjusting the motorcycle's position based on real-time sensor data, ensuring that it remains upright and stable during dynamic motions.Through rigorous testing and tuning of the balancing algorithm, the project successfully achieves an improved system stability. The self-balancing motorcycle can effectively withstand external disturbances and maneuver through both straight and circular paths with remarkable precision and control.</p>
                <h4>Check out the awesome video here</h4>
                <body>
                  <div className="youtube-link-container">
                  <a href="https://www.youtube.com/watch?v=oXit5hOdNic" className="youtube Link">Youtube Link </a>
                  </div>
                </body>
                
              </div>
            </div>
            <div className= "Projects">
              <div className="project-item">
                <h2>Webcam Controlled Rover</h2>
                <p>The project showcases the development and programming of an autonomous rover. The primary objective of this project is to enable the rover to navigate and follow a predefined path using image processing techniques.The rover's path-following capability is achieved through sophisticated image processing algorithms. The onboard camera captures the surrounding environment, and the image processing module analyzes the visual data to identify the path. The rover then intelligently adjusts its movements based on this analysis, allowing it to stay on course with high precision.Through rigorous testing and optimization, the project attains an impressive 97% accuracy in motion planning.</p>
                <h4>Click below for the video</h4>
                <body>
                  <div className="youtube-link-container">
                  <a href="https://www.youtube.com/watch?v=ejubK3HIYb8&t=9s" className="youtube Link">Youtube Link </a>
                  </div>
                </body>
              </div>
            </div>
            <div className= "Projects">
              <div className="project-item">
                <h2>Drawing Robot using Arduino Nano 33 IoT</h2>
                <p>The "Drawing Robot" project demonstrates the creation of an innovative and intelligent drawing robot capable of replicating any input image provided. The primary objective of this project is to develop a precise and autonomous robotic system that can accurately reproduce intricate drawings with exceptional accuracy.The drawing robot is equipped with coordinated motor systems that control the motion of its arms and drawing instrument. These motors enable the robot to move with remarkable precision and execute intricate strokes, faithfully reproducing the details of the input image.Through advanced control algorithms, the drawing robot achieves an impressive accuracy rate of more than 93%.In addition to its precision, the drawing robot also demonstrates efficient performance, boasting a drawing speed of 0.66 cm/sec. </p>
                <h4>Click below for the video</h4>
                <body>
                  <div className="youtube-link-container">
                  <a href="https://www.youtube.com/watch?v=LAiQY8xGtQI&t=3s" className="youtube Link">Youtube Link </a>
                  </div>
                </body>
              </div>
            </div>
          <hr/>
          </div>
        </div>
        <div className="TKM">
          <img src={process.env.PUBLIC_URL + "/images/tkm.jpg"} />
          {/* <img src="images/tkm.jpg"></img> */}
         <div>
         <h3>TKM College of Engineer &middot; B-Tech - Electronics and communications </h3>
          <b> Aug 2015 -May 2019</b>
          <hr/>
         </div>
      </div>
    </div> 
    </div></>
  );
}

