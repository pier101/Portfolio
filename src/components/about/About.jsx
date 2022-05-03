import React from 'react'
import "./about.css";
import ME from '../../assets/me-about.jpg';
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <h5>Clients</h5>
              <small>200+ Wirldwide</small>
            </article>

          <div className="about__cards">
            <article className='about__card'>
              <h5>Projects</h5>
              <small>80+ 어쩌고저쩌고</small>
            </article>
          </div>

          </div>
          <p>
            Lerem ipdlwfefefwfeklfe
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About