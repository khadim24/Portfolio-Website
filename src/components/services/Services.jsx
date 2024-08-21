import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I specialize in crafting robust software solutions, focusing on efficiency and scalability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I excel in writing clean, maintainable code and optimizing software performance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I work collaboratively with cross-functional teams to ensure the seamless integration of software components.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Services include building efficient algorithms, optimizing code, and developing system-level applications</p>
            </li>
          </ul>
        </article>
        {/* END OF Software Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I specialize in developing comprehensive web applications, handling both front-end and back-end development using technologies such as React, Node.js, Next.js, and Postman.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My expertise includes building responsive, user-friendly interfaces and ensuring data integrity and security in web applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I am adept at deploying and maintaining scalable web services, focusing on enhancing user experience and application performance across all devices.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>IT Support and Systems Administration</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I specialize in providing comprehensive IT support, ensuring smooth and efficient operation of all computer systems and networks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I excel in troubleshooting and resolving technical issues, minimizing downtime, and improving overall system performance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I work collaboratively with teams and end-users to implement preventive maintenance, system upgrades, and security measures, ensuring the reliability and security of IT infrastructure.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services