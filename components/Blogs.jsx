import Head from "next/head";
import Link from "next/link";
import { createClient } from 'contentful';
import styles from './sass/blogs.module.scss'
import { useEffect, useState } from "react";


const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});


export default function Home() {

  const [articles,setArticle]=useState(null);

    useEffect(()=> {

        async function getData() {
            let data = await client.getEntries({
              content_type: "blogs",
              limit:5,
            })
            setArticle(data.items);
          
          } 

          getData();
         
        },[]);



  return (
 
   
<div className={styles.blogscontainer}>
<h2>Blogs From Us</h2>
<p>Read our blog, get updated about hosteltrend.com.</p>


      {articles &&<main className={styles.blogs}>



          {articles.map((article) => (
            <div key={article.sys.id} className={styles.blog}>

              <Link href={"/blogs/" + article.fields.slug}>

                <a>
                {article.fields.coverphoto.fields.file.url && <img src={'https:' + article.fields.coverphoto.fields.file.url} alt='Cover Image' width={article.fields.coverphoto.fields.file.details.image.width} height={article.fields.coverphoto.fields.file.details.image.height}/>
}
                <h2>{article.fields.title}</h2>
                <p>{article.fields.description}</p>
                <a href={"/blogs/" + article.fields.slug}><button>READ MORE</button></a>
               


                </a>
              </Link>
            </div>
          ))}
    
      </main>}

      </div>

   
  );
}
