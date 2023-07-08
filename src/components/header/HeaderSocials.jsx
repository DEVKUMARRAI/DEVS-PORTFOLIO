import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div  className='header_socials'>
      <a href="https://www.linkedin.com/in/dev-rai-a81183224/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/DEVKUMARRAI" target="_blank"><FaGithub/></a>
      <a href="https://facebook.com" target="_blank"><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials
