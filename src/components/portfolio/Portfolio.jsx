import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project-1.gif'
import IMG2 from '../../assets/project-2.gif'
import IMG3 from '../../assets/project-3.gif'
import IMG4 from '../../assets/project-4.gif'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Arcade Basketball Game',
    github: 'https://github.com/Mconde13/apcsa_modim_basketball',
  },
  {
    id: 2,
    image: IMG3,
    title: 'Pantry Management Application',
    github: 'https://github.com/khadim24/Pantry-App',
    demo: 'https://pantry-app-khadim.vercel.app/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Customer Service Chatbot for Healthcare',
    github: 'https://github.com/khadim24/healthcare-chatsupport',
    demo: 'https://healthcare-chatsupport.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Placeholder',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Placeholder',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Placeholder',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio