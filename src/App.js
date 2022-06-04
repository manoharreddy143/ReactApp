import React,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './components/Dropdown'
import { pink } from "@mui/material/colors";
import ButtonAppBar from "./components/Appbar";


const App=()=>{
    const[data,Set]=useState({
        name: '',
        Branch:'',
        email: '',
        college: '',
        section:'',
        phone:'',
        altPhone: ''
        

    })
    const changeHandler = e=>{
      Set({...data,[e.target.name]:e.target.value});

}

const submitHandler = e=>{
    e.preventDefault();
    fetch('https://react-56016-default-rtdb.firebaseio.com/data.json',
    {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
     } 
  }).then(res => alert('data added successfully.')).catch(err => console.error(err))
}
return(
    <div style={{
        backgroundColor: 'pink',
        
      }}>
          <ButtonAppBar />
        <center>
        <form onSubmit ={submitHandler}>
        <label>Email:</label><br />
       <input type="email" name="email" onChange={changeHandler}required/> <br />
  
        <label>Name</label><br />
        <input type="text" name="name" onChange={changeHandler} required/> <br />
        <label>College name: </label><br />
        <input type="text" name="college" onChange={changeHandler }required/> <br />        <label>Branch :</label><br />
        <input type="text" name="Branch" onChange={changeHandler}required/> <br />
        <label>Section :</label><br />
        <input type="text" name="section" onChange={changeHandler}required/> <br />
        <Dropdown />
        <label>Phone nnumber</label><br />
        <input type="text" name="phone" onChange={changeHandler} required/> <br />
        <label>Alternate Phone number</label><br />
        <input type="text" name="altPhone" onChange={changeHandler}/> <br />
        <input type='submit' value="Post data now"/>

        
        </form> 
        </center>
    </div>
)
}
export default App


