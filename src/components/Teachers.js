import React from 'react';
import TeacherList from '../data/teachers';
import { Card , Badge, CardHeader,CardImg, CardFooter, CardBody,
 CardText,CardColumns,CardTitle,CardSubtitle,Button,Row,Col, } from 'reactstrap';
 
import Description from './Description'
const Teachers = () => {
  let teachers = TeacherList.map((teacher) => {
    return (
      // <li className="teacher" key={teacher.id} >
      //   <img className="teacher-img" src={teacher.img_src} alt="teacher" />
      //   <h3>{teacher.name}</h3>
      //   <a className="link" href={teacher.code} target="_blank"  rel="noopener noreferrer"><h3> Code </h3></a>
      //   <a  className="link code" href={teacher.live} target="_blank"  rel="noopener noreferrer"><h3> Live </h3></a>

    
        
      //   <p>{teacher.bio}</p>
      //   <p>
      //     {teacher.used}
      //   </p>
      // </li>
//       <div>
//       <CardColumns>
//       <Card>
//         <CardHeader>{teacher.name}</CardHeader>
//         <CardBody>
//         <img className="teacher-img" src={teacher.img_src} alt="teacher" />
//           <CardText>{teacher.bio}</CardText>
//           <a className="link" href={teacher.code} target="_blank"  rel="noopener noreferrer"><h3> Code </h3></a>
//  <a  className="link code" href={teacher.live} target="_blank"  rel="noopener noreferrer"><h3> Live </h3></a>
//         </CardBody>
        // <CardFooter>
        // <Badge color="primary" pill>{teacher.javascript}</Badge>
        // <Badge color="secondary" pill>{teacher.html5}</Badge>
        // <Badge color="success" pill>{teacher.bootstrap}</Badge>
        // <Badge color="info" pill>{teacher.css3}</Badge>
        // <Badge color="light ">{teacher.jquery}</Badge>



        
        // </CardFooter>
        

//       </Card>
// </CardColumns>
      
//     </div>
<div>

<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
<img className="teacher-img" src={teacher.img_src} alt="teacher" />
  <b>{teacher.name}</b>
          <a className="link" href={teacher.code} target="_blank"  rel="noopener noreferrer"><b> Code </b></a>
  <a  className="link code" href={teacher.live} target="_blank"  rel="noopener noreferrer"><b> Live </b></a>
  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
 
  <Description/>
  <CardFooter>
         <Badge color="primary" pill>{teacher.javascript}</Badge>
         <Badge color="secondary" pill>{teacher.html5}</Badge>
         <Badge color="success" pill>{teacher.bootstrap}</Badge>
         <Badge color="info" pill>{teacher.css3}</Badge>
         <Badge color="light ">{teacher.jquery}</Badge>



        
         </CardFooter>
</Card>


</div>



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