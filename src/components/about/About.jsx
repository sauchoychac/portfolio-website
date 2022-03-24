import React from 'react'
import './about.css'
import MyImage from '../../assets/about-image.jpg'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
    
    <h5>About Me</h5>

    <div className="container about-container">
      <div className="about-me">
        <div className="about-me-image">
          <img src={MyImage} alt= "About Image"/>
        </div>
      </div>

    <div className="about-content">
      <div className="about-cards">
      <a href="https://github.com/sauchoychac" target="_blank">
        <article className="about-card">
          <AiFillGithub className="about-icon"/>
          <h5>GitHub</h5>
        </article>
      </a>

        <a href="https://www.linkedin.com/in/sauchoy-chac/" target="_blank">
          <article className="about-card">
           <AiFillLinkedin className="about-icon"/>
           <h5>Linkedin Profile</h5>
          </article>
        </a>
      </div>
      
      <p>
      My name is Sauchoy Chac. I graduated from City, University of London with 2:1 Honours in July 2021.
      Now, I am looking for my entry level jobs to start my career. I am mainly focused on finding Front
      End Development or Games Techonlogy Opportunites but am open to all types of opportunities.
      Though I may not have any professional experience at the moment, I know that I can bring a new
      prespective and approach to every project. I am always open to new challenges and constructive feedback.
      I am open-minded and able to adapt to new challenges quickly.
      </p>
    </div>
  </div>

    </section>
  )
}

export default About