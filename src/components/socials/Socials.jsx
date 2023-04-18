import React from 'react';
import "./socials.css";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Socials = () => {
  return (
    <>
      <div className='socials_container'>
        <a href="https://github.com/blockdevjpm" target='_blank' rel="noreferrer">
          <FaIcons.FaGithubSquare className='social_icon icon1' />
        </a>
        <a href="https://twitter.com/dev_jpm0" target='_blank' rel="noreferrer">
          <AiIcons.AiOutlineTwitter className='social_icon icon2' />
        </a>
        <a href="https://www.linkedin.com/in/dev-jpm/" target='_blank' rel="noreferrer">
          <FaIcons.FaLinkedinIn className='social_icon icon3' />
        </a>
        <a href="https://discordapp.com/users/1069159068255666177" target='_blank' rel="noreferrer">
          <FaIcons.FaDiscord className='social_icon icon4' />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100050306079080&mibextid=ZbWKwL" target='_blank' rel="noreferrer">
          <FaIcons.FaFacebookF className='social_icon icon5' />
        </a>
        <a href="https://www.instagram.com/_.j._.p._.m._/" target='_blank' rel="noreferrer">
          <AiIcons.AiOutlineInstagram className='social_icon icon6' />
        </a>
      </div>
      <div className='form_container'>
        <form>
          <span className='form_styles_1'>
            <h1>LET'S CONNECT !</h1>
            <input
              className='input_field'
              type="text"
              placeholder="Name"
            />
            <input
              className='input_field'
              type="email"
              placeholder="Email"
            />
            <input
              className='input_field'
              type="number"
              placeholder="Phone Number (optional)"
            />
            <input
              className='input_field'
              type="text"
              placeholder="Subject"
            />
          </span>
          <span className='form_styles_2'>
            <textarea placeholder='Write your message...'>
              
            </textarea>
            <input
              type="submit"
              value="SUBMIT"
              className='submit'
            />
          </span>
        </form>
      </div>
    </>
  )
}

export default Socials