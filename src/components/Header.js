import React from 'react';
import {NavLink,} from 'react-router-dom';
const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
    <li><NavLink exact to="/Intro" >Intro</NavLink></li>

      <li><NavLink  to="/home" >Home</NavLink></li>
      <li><NavLink to="/teachers" >Projects</NavLink></li>
      <li><NavLink to="/courses">Skills</NavLink></li>
    </ul>    
  </header>
);

export default Header;