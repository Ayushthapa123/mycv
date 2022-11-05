import React from 'react';
import styles from './sass/glowingb.module.scss';

export default function Glowingb() {

let a=[44,1,3,45,1]

let x=sortByHeight(a);
console.log(x);

function sortByHeight(a) {
let sorted=a.filter(element=> {return element!=1}).sort((a,b)=>a-b);
console.log(sorted);
return a.map(value=>(value===1)?1:sorted.shift())

}


  return (
    <div className={styles.glowingb}>
 <div className={styles.ccontainer}>   
  <div className={styles.container}>
        <button className={styles.button}>Button</button>
    </div>
    </div>
    </div>    
  )
}