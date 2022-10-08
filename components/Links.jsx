import React from 'react';
import Link from 'next/link';

import styles from './sass/links.module.scss';

export default function Links() {
  return (
    <div className={styles.links}>

        <Link href='/mini/glowing-button'><button>Glowing Button </button></Link>
        <Link href=''><button>Shining Button </button></Link>
        <Link href=''><button>Shining Button </button></Link>
    </div>
  )
}