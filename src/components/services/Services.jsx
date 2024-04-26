import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Prototyping: Can develop interactive prototypes </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Visual Design: Can create visually appealing designs </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Interactive Design: Can Create Interactive/Responsive Desings </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Seo Optimization: Can SEO Optimize Websites </p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Portfolio Websites</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Food Delivery Websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>E-Commerce Websites</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Blog Websites</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Landing Pages</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Attractive Logos For Websites</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Video Editing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Catching Quotes For Websites</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Seo Optimized Contents For Blog Pages</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Content Suggestions For Blog Pages</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
