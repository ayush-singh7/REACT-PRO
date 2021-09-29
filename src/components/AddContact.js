import React, {useState} from 'react'
import {Link } from 'react-router-dom'
const  AddContact =(props) =>{
    const data = {
        name:"",
        email:""
    };
    const [state,setState] = useState(data)
    
    const add = (e) =>{

        e.preventDefault();
        if(state.name === "" && state.email ===""){
            alert('all fields are mandatory')
            return
        }
        props.addContactHandler(state)
        setState(data);
        
    }
    const handleChange = (e)=>{
  
        const name = e.target.name;
        const value = e.target.value;
        setState({...state, [name]:value})
        }
        return(
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={add}>
                    <div className='field'>
                        <label>Name</label>

                        <input type='text' 
                        name='name' 
                        placeholder='Enter name' 
                        value={state.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email'
                         placeholder='Enter email'
                         value={state.email}
                        onChange={handleChange}
 
                         />
                    </div>
                    
                    <button className='ui button blue' >Add Details</button>
                    
                    <Link to='/'>
                    <button className='ui button blue'>View All</button>
                    </Link>
                </form>
            </div>
        )
    }    
export default AddContact