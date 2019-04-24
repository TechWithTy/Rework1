import React from 'react';
import {NavLink,} from 'react-router-dom';
const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{background: '#6edcd1'}}>Home</NavLink></li>
      <li><NavLink to="/teachers" >Projects</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;