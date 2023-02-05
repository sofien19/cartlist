import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from './card';


export default function FormComp() {
const [fullName,setFullName]=useState('')
const [myPhone,setmyPhone]=useState('')
const [mail,setMail]=useState('')
const [contactList,setContactList]=useState(JSON.parse(localStorage.getItem("contacts"))||[])

useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contactList));
}, [contactList])

 const handleSubmit=()=>{
  let contact = {fullName:fullName , myPhone:myPhone , mail : mail}
   setContactList([...contactList,contact])
 }


  return (
    <div className='main'>

      <div>
        <h1>this is the form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>full name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={fullName} onChange={(e) => 
setFullName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter mail" value={mail} onChange={(e) => 
setMail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>phone</Form.Label>
            <Form.Control type="text" placeholder="enter Password" value={myPhone} onChange={(e) => 
setmyPhone(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit"   >
            Submit
            </Button>
    </Form>
    </div>
    <div>
      <h1>This is the contact list </h1>
    {contactList.map((contact) => <Card fullName = {contact.fullName} mail={contact.mail} myPhone={contact.myPhone} />)}
    </div>
    
    </div>
  )
}
