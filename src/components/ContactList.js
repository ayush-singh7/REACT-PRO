import React from 'react'
import {Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    //console.log(props)
    
    const deleteContactHandler = (id)=>{
        props.getContactId(id)
    };
    // const contacts = [{
    //     id:1,
    //     name:'ayush',
    //     email:'ayush@gmail.com'
    // }]
    const listContacts = props.contacts.map((contact)=>{
        return(
          <ContactCard contact={contact} 
          clickHander={deleteContactHandler}
           key={contact.id}></ContactCard>
 
        )
    })
    return (
        <div>
        
        <h3>Contact List </h3>
        <div className='main'>

        <Link to='/add'>
        <button className='ui button blue right'>Add Contacts</button>   
        </Link>  
        <div className='ui celled list'>
            {listContacts}
        </div>
        </div>
        </div>
        
    )
}

export default ContactList
