import React,{useState,useEffect} from 'react';
import styles from './sass/geometry.module.scss';

export default function Geometry() {
const [height,setHeight]=useState('');
const [offsettop,setOffsettop]=useState('');
const [scrollposition,setScrollposition]=useState('');


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
    

        let ourdiv=document.getElementById("second");

        let height=ourdiv.clientHeight;
        let offsettop=ourdiv.offsetTop;
        let scrollheight =window.pageYOffset;
        
        // console.log("pageyoffset",scrollheight);
        
        
        setHeight(height);
        setOffsettop(offsettop);
        setScrollposition(offsettop-scrollheight);
        
          
    
  
 
  }
    window.addEventListener('scroll', debounce(handleScroll));
 



function mutate(a) {
    let b=[];
    for (let i=0;i<a.length;i++) {
        if(i==0) {
            b[0]=a[0]+a[1];
        }
        else if(i==a.length-1) {
            b[i]=a[i-1]+a[i];

        }
        else {
            b[i]=a[i-1]+a[i]+a[i+1];
        }

    }

    return b;

}

let mutated=mutate([4,0,1,-2,3]);

console.log(mutated);







},[])
   
  return (
    <div className={styles.geometry}>
<div className={styles.first}>
   <p >First Div</p> 
   <h3>References</h3>
   <a href="https://javascript.info/size-and-scroll"> https://javascript.info/size-and-scroll</a>
</div>

<div className={styles.second} id="second">
    Second Div
    <p>Height of the div: {height}</p>
    <p>Offset from the Top: {offsettop}</p>
    <p>Scroll Position {scrollposition}</p>
</div>


<div className={styles.third}>
   <p>Third Div</p> 
   
</div>


    </div>
  )
}
