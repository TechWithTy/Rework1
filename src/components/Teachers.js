import React from 'react';
import TeacherList from '../data/teachers';

const Teachers = () => {
  let teachers = TeacherList.map((teacher) => {
    return (
      <li className="teacher" key={teacher.id} >
        <img className="teacher-img" src={teacher.img_src} alt="teacher" />
        <h3>{teacher.name}</h3>
        
        <p>{teacher.bio}</p>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>Vanilla Javascript</li>
          

        </ul>
      </li>
      
    
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Projects </h2>
      <ul className="group">
        {teachers}    
      </ul>
    </div>
  );
}

export default Teachers;