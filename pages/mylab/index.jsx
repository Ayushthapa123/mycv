import React from 'react';
import Link from 'next/link';
import styles from '../../sass/mylab.module.scss';

export default function Mylab() {
  return (
    <div className={styles.mylab}>
        <div className={styles.links}>
 <Link href='mylab/mini/glowing-button'><button>Glowing Button </button></Link>
        
        </div>
    </div>
  )
}
