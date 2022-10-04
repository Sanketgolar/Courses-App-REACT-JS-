import './App.css';
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8081/courses").then((result)=>{
      result.json().then((resp)=>{
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      <h1>GET YOUR COURSES HERE </h1>
  
      <Table striped variant='dark'>
       <tbody>
       
       <tr>
       
          <td>ID</td>
          <td>Course Name</td>
          <td>Description</td>
          
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.id}</td>
          <td>{item.courseName}</td>
          <td>{item.description}</td>
         
          </tr>
          )
        }
       </tbody>
       </Table>

       <div>
      <h5>Click here to refresh Courses list</h5>
      <Button onClick={() => {window.location.reload();}}>Refresh List</Button>
      
    </div>
    <br/> <br/> 
    <br/> <br/> 
    </div>
  );
}
export default App;
