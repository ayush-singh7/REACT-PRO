import React, {useState, useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {uuid} from 'uuidv4'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts,setContacts] = useState([]);
  const addContactHandler = (contact)=>{
      console.log(contact)
      setContacts([...contacts,{ id:uuid(), ...contact}])
  };
  
  const removeContacthandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !==id;
    })

    setContacts(newContactList)
  }

  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts)
    setContacts(retriveContacts)
  },[])
 
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
 
  return (
    <div className='ui container'>
     <Router>
     <Switch>
     <Route path='/' exact render = {(props)=>
     
      <ContactList {...props} contacts={contacts} getContactId={removeContacthandler}/>}/>
      
     <Route path="/add" component={()=>(
       <AddContact addContactHandler={addContactHandler}/>
     )}/>
     
     <Route path='/contact:id' component={ContactDetail}/>
      render
     </Switch>
     <Header/>
      
     {/* <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts} getContactId={removeContacthandler}/> */}
     </Router>
    </div>
  );
}

export default App;
