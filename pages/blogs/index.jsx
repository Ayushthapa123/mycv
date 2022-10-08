import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Nav";
import { createClient } from 'contentful';

import styles from '../../sass/blogs.module.scss';



import {AiOutlineArrowRight} from 'react-icons/ai';


const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "blogs",
  });

  return {
    props: {
      articles: data.items,
    },
    revalidate: 50,
  };
}

export default function Home({ articles }) {

// console.log(articles[0])
// console.log(articles[0].fields.coverphoto.fields.file.details.image.height)

  return (
    <div className={styles.blogscontainer}>
      <Head>
        <title>Ayush Thapa Blogs</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Bungee&family=Fira+Sans+Condensed&family=Kaushan+Script&family=Roboto:wght@300&family=Squada+One&family=Tapestry&family=Teko&display=swap" rel="stylesheet" /> 
    
      </Head>
{/* <Navbar/> */}


<div>
  <h2>The Latest Blogs From me</h2>
</div>

      <main className={styles.blogs}>
   
          {articles.map((article) => (
            <div key={article.sys.id}>

              <Link href={"/blogs/" + article.fields.slug}>

                <a>
            
                <h3>{article.fields.title}</h3>
                
                <p>{article.fields.description}</p>

                <button>Read More<span><AiOutlineArrowRight/></span></button><br/>
                <span> {article.fields.date}</span>
               


                </a>
              </Link>
            </div>
          ))}
    
      </main>



   

    </div>
  );
}
