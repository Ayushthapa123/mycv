import React, { useState } from 'react'
import styles from '../../sass/contact.module.scss'

import { TextField } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InputAdornment from '@mui/material/InputAdornment';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Button } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';

import Nav2 from '../../components/Nav2'

import {db,storage,collection, addDoc,getStorage, ref,sRef, uploadBytes,updateDoc,doc, uploadBytesResumable, getDownloadURL } from '../../firebase/firebase' 


export default function Index() {



const [name, setName]=useState('');
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');
const [message,setMessage]=useState('');
const [docid,setDocid]=useState('')



function handleSubmit(e) {
  e.preventDefault();
  const docRef = addDoc(collection(db, "contactform"), {
    name,
    email,
    phone,
    message,
    docid,


   }).then((docRef)=> {
     const updateRef = doc(db, "contactform", docRef.id);

   updateDoc(updateRef, {
       docid:docRef.id,
   });

    alert('Form Submitted successfully');
    setName('')
    setEmail('')
    setPhone('')
    setMessage('');

   })



  }







  return (
    <div className={styles.contact}>
<div>
<Nav2/>
</div>
<div className={styles.container}>
    <div className={styles.form}>
<h3><FiberManualRecordIcon fontSize='small'/> Get In Touch</h3>
<h2>Ready To Get Started</h2>
<form onSubmit={handleSubmit}>
    <TextField
  label="Your Name"
  value={name}
  margin='dense'
  fullWidth
  type='text'
  required
  // variant="standard"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
       <DriveFileRenameOutlineIcon/>
      </InputAdornment>
    ),
  }}
 
  onChange={(e)=>setName(e.target.value)} 


/><br/>

<TextField
 required
  label="Your Email"
  value={email}
  margin='dense'
  type='email'
 
  fullWidth
  // variant="standard"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
       <EmailIcon/>
      </InputAdornment>
    ),
  }}
 
  onChange={(e)=>setEmail(e.target.value)}


/><br/>

<TextField
  label="Your Phone"
  value={phone}
  margin='dense'
  type='text'
  required
  fullWidth
  // variant="standard"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
       <CallIcon/>
      </InputAdornment>
    ),
  }}
 
  onChange={(e)=>setPhone(e.target.value)} 

/><br/>

<TextField
  label="Message"
  value={message}
  margin='dense'
  fullWidth
  multiline
  rows={3}


 
  onChange={(e)=>setMessage(e.target.value)} 


/><br/>
<Button 
variant='contained'
margin='dense'
type='submit'

>
  Request a call
  </Button>
  </form>
    </div>





    <div className={styles.details}>
<h4>Contact Details</h4>
<h2>Get In Touch</h2>
<p>We'd love to hear your comments, feedback and thoughts.
   Sometimes email can feel a little impersonal and we love 
   to get to know our clients personally, so please fill out 
   the form below and we'll give you a call!</p>

<h4><MyLocationIcon/> Our Location</h4>
<p>Kupondole, Lalitpur, Nepal</p>
<h4><EmailIcon/> Our MailBox</h4>
<p>info@ktmtech.com</p>
<h4><CallIcon/> Our Phones</h4>
<p>+977-9846793894</p>
<p>+977-9808437777</p>

    </div>
</div>
    </div>
  )
}
