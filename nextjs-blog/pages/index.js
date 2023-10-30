import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home( { allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Welcome, my name is Jake. I'm just getting started off in the blogging world. My main interest is finance. The topic of all posts on this site will be related to the markets. I personally invest, and am influenced by the value investing concepts introduced by Benjamin Graham.
          
        </p>
        <p>To start off here are some books I would recommend that influenced my understanding of the finance world</p>
        <figure>
          <figcaption>Research</figcaption>
          <ul>
          <li>The Intelligent Investor by Benjamin Graham</li>
          <li>Security Analysis by Benjamin Graham</li>
          <li>Buffet: The Making of an American Capitalist by Roger Lowenstein</li>
          <li>The Alchemy of Finance by George Soros</li>
        </ul>
        </figure>
        <figure>
          <figcaption>Recreation</figcaption>
          <ul>
          <li>The Big Short by Michael Lewis</li>
          <li>Liar's Poker by Michael Lewis</li>
          
        </ul>
        </figure>
      
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}><Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
      </Layout>
  );
}
        