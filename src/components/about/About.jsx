import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import CTA from './CTA'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>Khadim Thiam</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          I am a full-stack software engineer with a dedication to always keep learning. Currently pursuing a Computer Science degree at Hunter College, I am committed to building innovative, reliable, and scalable applications. I'm open to both remote and onsite software engineering opportunities. If you like what you see, don’t hesitate to reach out.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default About