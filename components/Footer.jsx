import React from 'react'

import styles from './sass/footer.module.scss'
import {MdAttachEmail} from 'react-icons/md';
import {FaMobile} from 'react-icons/fa';

import {TiSocialLinkedinCircular} from 'react-icons/ti';
import {VscGithub} from 'react-icons/vsc';
import {TiSocialFacebookCircular} from 'react-icons/ti';


export default function Footer() {
  return (
    <div className={styles.footer}>
<div className={styles.contact}>
    <div>
<span><b><MdAttachEmail/></b>thapaaayush115@gmail.com</span>
    </div>

    <div>
<span><b><FaMobile/></b>+977-9846793894</span>
    </div>
</div>
<div className={styles.social}>
  <span><a href='https://www.linkedin.com/in/ayushthapa/'><TiSocialLinkedinCircular/></a></span>
  <span><a href="https://github.com/Ayushthapa123"><VscGithub/></a></span>
  <span><a href="https://www.facebook.com/ayush.thapa.0123"><TiSocialFacebookCircular/></a></span>
</div>
    </div>
  )
}
