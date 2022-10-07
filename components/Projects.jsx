import React from 'react';
import styles from './sass/projects.module.scss';

import Slide from 'react-reveal/Slide';

import {FaGithubSquare} from 'react-icons/fa';

export default function Projects() {
  return (
    <div className={styles.projects}>
       <span>&lt;01/&gt;</span>
<div className={styles.project}>
  <div className={styles.des}>
 <b>PERSONAL PROJECT</b>   
 <h2>Hosteltrend.com</h2>
 <button>Next.js</button>
 <button>Contentful</button>
 <button>Firebase</button>
 <p>This project is basically my personal project. The purpose of making 
  this project was to help peoples to find hostels in nepal. Also, project is already doing 
  good. It generates around 1.5k to 2k traffic per month.
 </p>

 <strong><a href='https://hosteltrend.com/'>View Project</a></strong>
 </div>

 <div className={styles.photos} id="parallax1">
  <Slide top>
<img src='/photos/h1.png' alt='photo of hostel' className={styles.img1} id='parallax'/>
</Slide>
<Slide right>
<img src='/photos/h2.png' alt='photo of hostel' className={styles.img2} id="parallax2" />
</Slide>
 </div>
</div>


<span>&lt;02/&gt;</span>
<div className={styles.project}>
  <div className={styles.des}>
 <b>CLIENT&#39;S PROJECT</b>   
 <h2>Peace4people.org</h2>
 <button>Next.js</button>
 <button>Contentful</button>
 <p> This is semi-dynamic website created to write and display informations about the organization. 
  Client had all ready contents in the form of word files and folders. So, all i had to do was to make a SEO 
  friendly and good looking pages according to their requirements.
 </p>

 <strong><a href='https://www.peace4people.org/'>View Project</a></strong>
 </div>

 <div className={styles.photos}>

<Slide top>
  <img src='/photos/p1.png' alt='photo of hostel' className={styles.img1}/>
</Slide>
<Slide right>
<img src='/photos/p2.png' alt='photo of hostel' className={styles.img2}/>
</Slide>

 </div>
</div>

<span>&lt;03/&gt;</span>
<div className={styles.project}>
  <div className={styles.des}>
 <b>CLIENT&#39;S PROJECT</b>   
 <h2>Alaskabodysculpting.com</h2>
 <button>Next.js</button>
 <button>Contentful</button>
 <p>This was the project came through fiverr.com. Project was to create small business website with the booking functionality
  directly to their email and also to integrate PayPal payment gateway. By which customers were able to book and pay directly online.
 </p>

 <strong><a href='https://www.alaskabodysculpting.com/'>View Project</a></strong>
 </div>

 <div className={styles.photos}>
  <Slide top>
<img src='/photos/a1.png' alt='photo of hostel' className={styles.img1}/>
</Slide>
<Slide right>
<img src='/photos/a2.png' alt='photo of hostel' className={styles.img2}/>
</Slide>
 </div>
</div>


<span>&lt;04/&gt;</span>
<div className={styles.project}>
  <div className={styles.des}>
 <b>CLIENT&#39;S PROJECT</b>   
 <h2>More Mindful</h2>
 <button>Next.js</button>
 <button>Contentful</button>
 <p>This project was also through fiverr.com. This was the website for a music band called More Mindful. The main motive of the website was to 
  display informations about the band and also, peoples should be able to buy tickets through the link they provide on website.
 </p>

 <strong><a href='https://demo-three-mu.vercel.app/'>View Project</a></strong>
 </div>

 <div className={styles.photos}>
 <Slide top>
<img src='/photos/m1.png' alt='photo of hostel' className={styles.img1}/>
</Slide> 
<Slide right>
<img src='/photos/m2.png' alt='photo of hostel' className={styles.img2}/>
</Slide>
 </div>
</div>




<div className={styles.moreon}><button>More On <i><a href='https://github.com/Ayushthapa123'><FaGithubSquare/></a></i></button></div>



    </div>
  )
}
