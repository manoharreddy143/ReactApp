import React,{useState} from "react"
const App=()=>{
    const[data,Set]=useState({
        name: '',
        Age:''
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
    <div>
        <center>
        <form onSubmit ={submitHandler}>
        <label>Name</label><br />
        <input type="text" name="name" onChange={changeHandler}/> <br />
        <label>age :</label><br />
        <input type="number" name="Age" onChange={changeHandler}/> <br />
        <input type='submit' value="Post data now"/>
        
        </form> 
        </center>
    </div>
)
}
export default App


