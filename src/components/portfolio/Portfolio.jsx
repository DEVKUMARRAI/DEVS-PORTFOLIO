import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio.JPG'
import Img2 from '../../assets/Data.JPG'
import Img3 from '../../assets/Currency.JPG'
import Img4 from '../../assets/Weather.JPG'
import Img5 from '../../assets/Calculator.JPG'
import Img6 from '../../assets/portfolio6.jpg'
const data = [
  {
    id: 1,
    image: Img1,
    title: 'Portfolio',
    github: 'https://github.com/DEVKUMARRAI/DEVS-PORTFOLIO',
    demo: 'https://devkumarrai.github.io/DEVS-PORTFOLIO/',
  },
  {
    id: 2,
    image: Img2,
    title: 'Data Analytics',
    github: 'https://github.com/DEVKUMARRAI/Data_Analytics_React_Tailwind',
    demo: 'https://devkumarrai.github.io/Data_Analytics_React_Tailwind/',
  },
  {
    id: 3,
    image: Img3,
    title: 'Currency Converter',
    github: 'https://github.com/DEVKUMARRAI/Live_Currency_Converter',
    demo: 'https://devkumarrai.github.io/Live_Currency_Converter/',
  },
  {
    id: 4,
    image: Img4,
    title: 'Weather App',
    github: 'https://github.com/DEVKUMARRAI/Weather_App_VanillaJS',
    demo: 'https://devkumarrai.github.io/Weather_App_VanillaJS/',
  },
  {
    id: 5,
    image: Img5,
    title: 'Calculator',
    github: 'https://github.com/DEVKUMARRAI/Calculator',
    demo: 'https://devkumarrai.github.io/Calculator/',
  },
  {
    id: 6,
    image: Img6,
    title: 'Project 6',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container container_portfolio">
        {
          data.map(({ id, image, title, github, demo }) => (
            <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          ))
        }

      </div>
    </section>
  )
}

export default Portfolio
