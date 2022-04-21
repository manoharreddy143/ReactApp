    import React,{useState} from "react";
    const App=()=>{
        const[data, SetData]=useState({
            name: "",
            age:""
        })
        const changeHandler = e=>{
            SetData({...data,[e.target.name]:e.target.value});

    }
    const submitHandler = e=>{
        e.preventDefault();
        fetch('https://freelance-4549e-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',
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
            <input type="text" name="name" onchange={changeHandler}/> <br />
            <label>age</label><br />
            <input type="text" name="age" onchange={changeHandler}/> <br />
            <input type='submit' value="Post data"/>
            
            </form> 
            </center>
        </div>
    )
    }
    export default App

