import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {    
  
  
  render() {
    return (
      <div className="main-content home">
        <img src="https://lh3.googleusercontent.com/Bn8oYXw0ggmJOZbXzRKp7wk9dCyhif-KfgiaAi6L8-gHq02v4EdAVlMDvSu0hOJ9RGVaVMwPlYRb9EVpRAWAZE_h-BJ8pdB5j0O6NEEpc1uUPpTW9p8JUFUwpIZzzRqLGM02MYvuEsNhJXRp7GD5_Fz5dQfLvA3Q3_b-OBrXeNOok60kM6NL0ZoIqJsJ9Xx56AsMbckUOAhci3fVM4q42iuwqxlkU7F4KHlDZXSknNebA6LFKmXzYpAtNLT_-lkSDg6TiM9bpvr-Eo-KHd-W8i6oKTHfQh_RnZgqtRLbUNsYOB-fJvQ3yD2VaXEcuwwJW-jVhsl6a3fCkY5lbKnMPlxFgsq6as3V56x4yivz_4C8vvWUGRvRpH9_ES9WkQL0oNFN81P13fUAOAv4YqU19jfz41ko12D_hlz0DYzkrwO-BPYCs0KpvRC3igLN7Nk1qGqih4a6j8Bd5_C_GV4qJVK9_YTmYDl8sqJrdnMKX_rbHQcbwE5nVnMC1hosFD_v1qdt20DYEkHXFlNNV_WF-PBJVTjjM6aT-yJb3v4pouvo9odiZRIMBJKh3FSnUFPjW932Y1zOnTjMx0HOrYlgfWvbRkTjvp14y2nfOOu6EQRo0jZ_Fgqpv9fU-p8hn9iyMt7M818vJl8Tu9VE7LKa-uAy7TwRnQ=w600-h200-no" alt="Aboutme Header"></img>
       <div>  
       <img src='https://svgshare.com/i/Ckg.svg' title='computer' />       
       </div>
       <small className="description"> Tyrique Daniel </small><br/>
       <small className="description"> Miami,FL </small>
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