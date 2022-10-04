import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

import React,{useEffect,useState} from "react"
import { ToastContainer } from 'react-bootstrap';



function Poster(){
const [id,setid]=useState("");
const [courseName,setName]=useState("");
const [description,setdescription]=useState("");
const [show, setShow] = useState(false);
    function saveCourse()
    {
      
        let data={id,courseName,description}
        fetch("http://localhost:8081/courses",{
            method:'POST',
            headers:{
                'Accept':'Application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        
    }

   
    

    return(
        
    <div className="Poster">
    <h1>ADD NEW COURSES HERE</h1>
    <input type="text" value={id} onChange={(e)=>{setid(e.target.value)}} name="id"/> <br/> <br/> 
    <input type="text" value={courseName} onChange={(e)=>{setName(e.target.value)}} name="courseName"/> <br/> <br/> 
    <input type="text"value={description} onChange={(e)=>{setdescription(e.target.value)}} name="description"/> <br/> <br/> 
    
    


    <Row>
      <Col xs={8}>
        <ToastContainer position='top-start'>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
            <small>Success!</small>
          </Toast.Header>
          <Toast.Body>Course added</Toast.Body>
        </Toast>
        </ToastContainer>
      </Col>
      <Col xs={16}>
        <Button onClick={() => {setShow(true);saveCourse();}}>Save Course</Button>
      </Col>
    </Row>


    </div>
    
    );
}
export default Poster;