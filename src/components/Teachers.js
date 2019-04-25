import React from 'react';
import TeacherList from '../data/teachers';

const Teachers = () => {
  let teachers = TeacherList.map((teacher) => {
    return (
      <li className="teacher" key={teacher.id} >
        <img className="teacher-img" src={teacher.img_src} alt="teacher" />
        <h3>{teacher.name}</h3>
        <a className="link" href={teacher.code} target="_blank"  rel="noopener noreferrer"><h3> Code </h3></a>
        <a  className="link code" href={teacher.live} target="_blank"  rel="noopener noreferrer"><h3> Live </h3></a>

    
        
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