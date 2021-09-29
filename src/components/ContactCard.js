import React from 'react'
import user from '../images/user.png'
import {Link } from 'react-router-dom'
const ContactCard = (props) => {
    console.log(props)
    const {id,name,email} = props.contact
    
    return (
        <div className='item'>
        
        <div className='content' style= {{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <div style={{display:'flex', alignItems:'center'}}>

        <img className='ui avatar image' src = {user}  alt = 'user'/>
        <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
           
            <div className='header'>{name}</div>
            <div>{email}</div>
        </Link>
        </div>

        <i className='trash alternate outline icon' style={{color:'red',paddingLeft:'30px', marginTop:'7px'}} 
        onClick={()=> props.clickHander(id)}></i>
        </div>
    </div>       
 
    )
}

export default ContactCard
