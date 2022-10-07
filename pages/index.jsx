import { useEffect } from 'react';
import Head from 'next/head'

import Nav from '../components/Nav';
import Particles from '../components/Particles';
import Me from '../components/Me';
import Myskills from '../components/Myskills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';



const Home= () => {





  useEffect(()=> {
    function debounce(func, wait=3,immediate=true) {

      var timeout;
      return function() {
          const context=this, args=arguments;
          const later=function() {
              timeout=null;
              if(!immediate) func.apply(context, args);
          };
          const callNow=immediate && !timeout;
          clearTimeout(timeout);
          timeout=setTimeout(later,wait);
          if(callNow) func.apply(context, args);
      };
      };
      
      
      
      function handleScroll(e) {
      
      const nav=document.querySelector("#nav");
      let yheight =window.pageYOffset;

      if(yheight>200) {
        nav.style.transform='translateY(-300px)';
        nav.style.backgroundColor=' #9e5f52 ';
      }
      if(yheight<200) {
        nav.style.transform='translateY(0px)';
        nav.style.backgroundColor='transparent';
      }
    
      //parallax for image
    //   const parallax1=document.querySelector("#parallax1");
    //  let offset=parallax1.offsetTop
    //  console.log('y',parallax1.offsetTop);
    //  parallax1.style.transform=`translateY(${offset *0.91}px)`
    //  parallax1.style.transform=`translateX(${-offset *0.01}px)`

  
      
      }
    
   
   
      window.addEventListener('scroll', debounce(handleScroll));
     
    },[]);













  return (
    <div>
      <Head>
        <title>Ayush Thapa</title>
        <meta name="description" content="Web Developer/Front-End Developer" />
        <link rel="icon" href="/logo.png" />


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Bungee&family=Fira+Sans+Condensed&family=Kaushan+Script&family=Roboto:wght@300&family=Squada+One&family=Tapestry&family=Teko&display=swap" rel="stylesheet" /> 
     
     
     </Head>

<div>

<Nav/>
<Particles/> 
<Me/>
<Myskills/>
<Projects/>
<Footer/>


</div>
    </div>
  )
}

export default Home
