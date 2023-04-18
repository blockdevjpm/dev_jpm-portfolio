import React from 'react';
import "./navbar.css";
import { NavLink } from "react-router-dom";

import navbarData from './navbarData.js';
import dev_jpm_img from "../images/dev_jpm.png";

const Navbar = () => {

  return (
    <div className='nav'>
        <NavLink to="/">
          <img src={dev_jpm_img} alt="icon" className='icon' />
          </NavLink>
          <ul className='nav-content'>
            {navbarData.map(item => {
              return (
                <li>
                  <NavLink to={item.path} style={{ textDecoration: 'none' }}>
                    <p className='nav_p'>{item.title}</p>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        
    </div>
  )
}

export default Navbar