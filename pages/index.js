import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdWordy}>
        <p>
          I am Jon Ellwood and here is some information on a few projects I
          worked on.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}></h2> */}
        <ul className={utilStyles.list}>
          {allPostsData.map(
            ({ id, date, title, keyword, src, height, width }) => (
              console.log(allPostsData),
              (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className={utilStyles.titleLink}>{title}</a>
                  </Link>
                  <CoverImage src={src} height={height} width={width} />
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                  <small className={utilStyles.keywordText}>
                    <p>{keyword}</p>
                  </small>
                </li>
              )
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
