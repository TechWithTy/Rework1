import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {    
  
  
  render() {
    return (
      <div className="main-content home">
        <img src="https://cdn1.imggmi.com/uploads/2019/4/25/eb6b7244912255d3e3f68829e3a8228b-full.png"alt="About me banner"></img>
       
        <p className="about">Hello, and thank you for visiting my website. I have always been a computer guy I remember inspecting elements in middle school and changing some text and thinking I hacked the school website. To then creating my own website with basic HTML and CSS in high school. </p>
        <br/>
        <p className="about">From there I decided to go to college for Computer Science where I studied languages like C++ and learned how to think like a programmer. The ability to create things you think of into a real space fascinates me. I love solving problems and being creative so programming is perfect for me it seems as it has always been a part of my life. Currently, I am learning more frameworks next I plan to learn back-end and in a few years delv into machine learning.</p>
        {/* Add Email Button */}
        <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=tyriquedaniel14@gmail.com,tyrique1.daniel@gmail.com&su=Programming-Inquiry&body=BODY" target="_blank"rel="noopener noreferrer" className="email">
            Email Me
        </a>
        
        <a  href="https://drive.google.com/file/d/1o5Fxe49MugM1b2Z6IW2lN6s1gXqmvcTf/view?usp=sharingn" target="_blank" rel="noopener noreferrer" className="email">
            Resume        
          </a>

          <ul>
        <li><a href="https://www.linkedin.com/in/tyrique-daniel-764586b5/" className="social linkedin" target="_blank rel="noreferrer="">LinkedIn</a></li>
        <li><a href="https://github.com/CodingOni" className="social github" target="_blank"  rel="noopener noreferrer">Github</a></li>
        <li><a href="https://www.sololearn.com/Profile/280099/?ref=app" className="social sololearn" target="_blank rel="noreferrer="">SoloLearn</a></li>
        <li><a href="https://www.sololearn.com/Profile/280099/?ref=app" className="social SO" target="_blank rel="noreferrer="">SoloLearn</a></li>

      </ul>
        <hr />
        <h3>What i am currently Using </h3>
        <Link to="/teachers" >HTML</Link>
        <Link to="/teachers" >Javascript</Link>
        <Link to="/teachers" >React </Link>
        <Link to="/teachers" >CSS</Link>
        <Link to="/teachers" >BootStrap</Link>
        <Link to="/teachers" >Docker</Link>
        <Link to="/teachers" >NPM</Link>
        <Link to="/teachers" >Accessibility/Mobile Responsive</Link>








      
      </div>
      
    );
  
  }
}

export default Home;