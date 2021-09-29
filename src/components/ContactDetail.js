import React from 'react'
import {Link} from 'react-router-dom'
import user from '../images/user.png'
const ContactDetail = (props) => {
    console.log(props.contact.name)
    console.log('poop')
    return (
        <>
            <h1>{props.contact.name}</h1>
        </>
    )
}

export default ContactDetail
