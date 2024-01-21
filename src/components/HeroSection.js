import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import WorkExperience from './pages/WorkExperience';
import {useState} from 'react';


class Chatbox {
  constructor() {
      this.args = {
          openButton: document.querySelector('.chatbox__button'),
          chatBox: document.querySelector('.chatbox__support'),
          sendButton: document.querySelector('.send__button')
      }

      this.state = false;
      this.messages = [];
  }

  display() {
      const {openButton, chatBox, sendButton} = this.args;

      openButton.addEventListener('click', () => this.toggleState(chatBox))

      sendButton.addEventListener('click', () => this.onSendButton(chatBox))

      const node = chatBox.querySelector('input');
      node.addEventListener("keyup", ({key}) => {
          if (key === "Enter") {
              this.onSendButton(chatBox)
          }
      })
  }

  toggleState(chatbox) {
      this.state = !this.state;

      // show or hides the box
      if(this.state) {
          chatbox.classList.add('chatbox--active')
      } else {
          chatbox.classList.remove('chatbox--active')
      }
  }

  onSendButton(chatbox) {
      var textField = chatbox.querySelector('input');
      let text = textField.value
      if (text === "") {
          return;
      }

      // let msg1 = { name: "User", message: text1 }
      // this.messages.push(msg1);

      // fetch('http://127.0.0.1:5000/predict', {
      //     method: 'POST',
      //     body: JSON.stringify({ message: text1 }),
      //     mode: 'cors',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //   })
      
      // fetch(input:$SCRIPT_ROOT + '/predict', {
      //     method: 'POST',
      //     body: JSON.stringify({ message: text1 }),
      //     mode: 'cors',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //   })
      //   .then(r => r.json())
      //   .then(r => {
      //     let msg2 = { name: "Nivina", message: r.answer };
      //     this.messages.push(msg2);
      //     this.updateChatText(chatbox)
      //     textField.value = ''

      // }).catch((error) => {
      //     console.error('Error:', error);
      //     this.updateChatText(chatbox)
      //     textField.value = ''
      //   });
      const msg = { name: "User", message: text };
      this.messages.push(msg);
      this.updateChatText(chatbox);
  
      fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_prompt: text }) // Note the field name change
      })
      .then(response => response.json())
      .then(data => {
        const answerMsg = { name: "Nivina", message: data.Answer };
        this.messages.push(answerMsg);
        this.updateChatText(chatbox);
        textField.value = "";
      })
      .catch(error => {
        console.error('Error:', error);
        this.updateChatText(chatbox);
        textField.value = "";
      });
  }

  updateChatText(chatbox) {
      var html = '';
      this.messages.slice().reverse().forEach(function(item, index) {
          if (item.name === "Nivina")
          {
              html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
          }
          else
          {
              html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
          }
        });

      const chatmessage = chatbox.querySelector('.chatbox__messages');
      chatmessage.innerHTML = html;
  }
}




function HeroSection () {
  return (
    <div className='hero-container'>
      <img src={process.env.PUBLIC_URL + "/images/bg-1.jpg"} />
      <div className="info">
        <p> I am Nivina Christy.</p>
      </div>

      <div id="aboutme" className="aboutme-container">
        <div className="aboutme-wrap">
        <div className="aboutme-content">
          <h2>About Me</h2>
          <p>
           As a Robotics and Autonomous Engineering master's student at Arizona State University, I hold a bachelor's degree in Electronics and Communication from TKM College of Engineering. With practical experience in the industry, I am an enthusiastic developer driven by a genuine curiosity to broaden my expertise across diverse domains.
          </p>
        </div>
        <div className="aboutme-info">
          <p>Name: Nivina Christy</p>
          <p>Email: nivinachristy10@gmail.com</p>
        </div>
        </div>
        <div className="mypic">
          <img src={process.env.PUBLIC_URL + "/images/mypic.jpg"}/>
        </div>
      </div>
    </div>
    
  );
}

  const chatbox = new Chatbox();
  chatbox.display();
  console.log();

export default HeroSection;
