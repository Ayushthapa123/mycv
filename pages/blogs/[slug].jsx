import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Head from 'next/head';
import { createClient } from 'contentful'
// import BlogLayout from '../../components/blogs/Layout';

import Breadcrumbs from '../../components/Breadcrumbs';
import Nav2 from '../../components/Nav2';


import styles from '../../sass/blogs.module.scss'

const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,

});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "blogs",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback:false,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "blogs",
    "fields.slug": params.slug,
  });

  return {
    props: {
      article: data.items[0],
    },
    revalidate:50, 
    // Incremental page re-generation after deployment
  };
}

export default function Article({ article }) {
  if (!article) return <div>404</div>;

console.log(article.fields)

  return (
    <div className={styles.blogpost}>

<Head>
  <title>{article.fields.title}</title>
  <link rel="icon" href="/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Bungee&family=Fira+Sans+Condensed&family=Kaushan+Script&family=Roboto:wght@300&family=Squada+One&family=Tapestry&family=Teko&display=swap" rel="stylesheet" /> 
  
 
</Head>

{/* <Nav2/> */}
{/* <Breadcrumbs slug={article.fields.slug}/> */}

{/* <BlogLayout> */}
<div className={styles.blog}>
<div className={styles.header}>
<h1>{article.fields.title}</h1>
<p>{article.fields.date} </p>
</div>

   <section className={styles.content}>
      <div className={styles.article}>
        {documentToReactComponents(article.fields.body,
        
        {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <img
              alt='image'
                src={"https:" + node.data.target.fields.file.url}
                width={node.data.target.fields.file.details.image.width}
                height={node.data.target.fields.file.details.image.height}
              />
            ),
          },
        }
        
        )}
      </div>



 </section>

 </div>
{/* </BlogLayout> */}

    </div>
  );
}
