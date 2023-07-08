import React from 'react'
import './header.css'
import CTA from './CTA'
import profile_pic from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <div>
       <header>
          <div className="container header_container">
            <h5>Hey ! Welcome To My Portfolio.</h5>
            <h1>Dev Kumar Rai</h1>
            <h5 className="text-light">Full Stack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
              <img src={profile_pic} alt="" />
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
          </div>
      
       </header>
    </div>
  )
}

export default Header
