import React from 'react';
import Link from 'next/link'
import Jump from 'react-reveal/Jump'
import styles from './sass/myskills.module.scss';

export default function Myskills() {

  return (
<div className={styles.container}>
<h2>My <strong>Skills</strong></h2>


<div className={styles.myskills}>
<div className={styles.photo}>
<img src='photo.jpg' alt='photo'/>
</div>

<div className={styles.skills}>
<button>HTML5</button>
<button>CSS3</button>
<button>Sass</button>
<button>MUI</button>
<button>Javascript</button>
<button>React</button>
<button>Next.js</button>
<button>Gatsby.js</button>
<button>GraphQl</button>
<button>Firebase</button>
<button>MongoDb</button>
{/* <button>Node.js</button> */}
<button>Git/Github</button>
<button>Gatsby/Strapi</button>
<button>Basic SEO</button>

<h3>I love building stuff 📱</h3>
<p>I started exploring the web after joining Bsc.CSIT in PMC, TU. The first 
  website I created was a blogging website using blogger but because of limited features in blogger I 
  switched to wordpress and created websites using WordPress templates. Although wordpress was good but i wanted 
  to create more flexible websites so I then swithced to React.js, Gatsby.js and Next.js.
  
  </p>
   <Link href='#'><a><b>KEEP READING</b></a></Link>
</div>
    </div>
</div>

  )
}
