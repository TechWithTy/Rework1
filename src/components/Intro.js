import React, { Component } from 'react'
import {NavLink,} from 'react-router-dom';
import { Badge } from 'reactstrap';

export default class Intro extends Component {
    render() {
        return (
           
          <div>
    <div className="container h-100 intro">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-lg-10 align-self-end">
          <h5 className="text-uppercase text-white font-weight-bold"> <i className="">Tyrique Daniel</i> </h5>
          <h5 className="text-uppercase text-white font-weight-bold">Front End Developer</h5>

          <hr className="divider my-4"/>
        </div>
        <div className="col-lg-8 align-self-baseline">
          <p className="text-white-75 font-weight-light mb-5">I'm a Front-End Developer currently looking for work and willing to relocate. 
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. 
Let's make something special.</p>
        </div>
      </div>
    </div>
    
   
    <div className="container">
      <div className="row justify-content-center">
      
        <div className="col-lg-8 text-center">
        <i class="fas fa-laptop-code"></i>
          
        <div className="floatLeft">
                <div className="mobileFirst"/>
                <b><p className="text-muted mb-0">Optimized Websites</p></b>
                <p className="text-muted mb-0">My layouts will work on any device, big or small.
</p>
            </div>
             <div className="floatLeft">
                <div className="fixComputer"/>
               <b> <p className="text-muted mb-0">Responsive</p> </b>
                <p className="text-muted mb-0">Fast load times and lag free interaction</p>
            </div>
            <div className="floatLeft">
            <div className="intuitive"/>
            <b><p className="text-muted mb-0">Intuitive</p></b>
            <p className="text-muted mb-0">Strong preference for easy to use, intuitive UX/UI.</p>
                
            </div>
             <div className="floatLeft">
                <div className="fixComputer"/>
               <b> <p className="text-muted mb-0">Dynamic</p> </b>
                <p className="text-muted mb-0">Websites don't have to be static, I love making pages come to life.</p>
            </div>
          <NavLink className="btn btn2 btn-light btn-xl js-scroll-trigger" to="/home">View My Work</NavLink>
        </div>
      </div>
    </div>

    
 
  </div>
        )
    }
}
