import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Khadim Thiam</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/khadim-thiam-4078191a9/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/khadim24" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Khadim Thiam. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer