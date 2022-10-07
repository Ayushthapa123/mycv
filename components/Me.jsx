import React from 'react';
import Link from 'next/link';
import styles from './sass/me.module.scss';


import {FaGithubSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

export default function Me() {
  return (
    <div className={styles.me}>
      
      
    <div className={styles.hi}>

      <h2>Hi, I am <strong>Ayush Thapa </strong> |<span> FrontEnd</span>  <br/>Developer</h2>
    </div>

    <div className={styles.links}>
    <Link href='https://www.linkedin.com/in/ayushthapa/'><a><FaLinkedin/></a></Link>
    <Link href='https://github.com/Ayushthapa123'><a><FaGithubSquare/></a></Link>
    <Link href='https://www.facebook.com/ayush.thapa.0123'><a><FaTwitterSquare/></a></Link>
    <Link href='https://twitter.com/Ayushthapa01'><a><FaFacebookSquare/></a></Link>
      
    </div>

    <div className={styles.des}>
      <p>I love exploring and creating 🚀 I'm a lifelong learner 🎓 
        and <br/>I am Javascript Enthusiast person who loves to create Awesome Websites⚛ </p>
        {/* <span><a href="#">More</a></span> */}
    </div>
      
      </div>
  )
}
