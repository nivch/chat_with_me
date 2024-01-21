import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              // src='images/result_111_10.png'
              src={process.env.PUBLIC_URL + "/images/result_111_10.png"}
              text='Stereo Image Depth Estimation using U-Net feature extraction.'
              label='Computer Vision'
              path='/portfolio/Education'
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/nlp.jpeg"}
              // src='images/nlp.jpeg'
              text='Propaganda Detection on news articles.'
              label='Natural Language Processing'
              path='/portfolio/Education'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + "/images/sml.jpg"}
              // src='images/sml.jpg'
              text='Fashion Outfit Generation using Machine Learning Recommendation.'
              label='Recommendation System'
              path='/portfolio/Education'
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/automotive.jpg"}
              // src='images/automotive.jpg'
              text='AUTOSAR Diagnostic Stack Development'
              label='Automotive'
              path='/portfolio/WorkExperience'
            />
            <CardItem
              // src='images/auto1.jpg'
              src={process.env.PUBLIC_URL + "/images/auto1.jpg"}
              text='DC-DC Converter Research Program for Electric Vehicle'
              label='Automotive'
              path='/portfolio/WorkExperience'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;