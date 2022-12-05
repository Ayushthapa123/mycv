import React from 'react'

export default function Rectangles() {


  const FindArea=(n)=> {
   
    let x=0;
    for (let i=1;i<2*(n-1);i=i+2) {
        x=x+i;
    }
    console.log("total area",2*x+(2*n-1))

}

FindArea(4)


  return (
    <div></div>
  )
}
