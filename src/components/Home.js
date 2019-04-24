import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {    
  
  
  render() {
    return (
      <div className="main-content home">
        <h2>About Me</h2>
       
        <p className="about">I am in love with code, starting with my first website in high school.Where I built a simple webpage using only Javascript and HTML, to learning about how machine learning works in my College class. Programming is an ongoing process of learning and creating. This is what draws me to programming. I also love solving problems, being creative and love technology. I believe this is why I chose this as my career field. I hope you choose me as your programmer as I would be a great fit for your team or your needs.</p>
        {/* Add Email Button */}
        <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=tyriquedaniel14@gmail.com,tyrique1.daniel@gmail.com&su=Programming-Inquiry&body=BODY" target="_blank"rel="noopener noreferrer" className="email">
            Email Me
        </a>
        
        <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=tyriquedaniel14@gmail.com,tyrique1.daniel@gmail.com&su=Programming-Inquiry&body=BODY" target="_blank" rel="noopener noreferrer" className="email">
            Resume        
          </a>

          <ul>
        <li><a href="https://www.linkedin.com/in/tyrique-daniel-764586b5/" className="social linkedin" target="_blank rel="noreferrer="">LinkedIn</a></li>
        <li><a href="https://github.com/CodingOni" className="social github" target="_blank" rel="noreferrer">Github</a></li>
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