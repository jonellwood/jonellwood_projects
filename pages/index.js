import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";
import tree from "../public/images/tree.svg";
import Footer from "../components/footer";

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
      <section className="{utilStyles.headingMdWordy}">
        <p>
          I am Jon Ellwood and here is some information on a few projects I
          worked on.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}></h2> */}
        <ul className={utilStyles.list}>
          {allPostsData.map(
            ({ id, date, title, keyword }) => (
              console.log(title + " " + keyword),
              (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className={utilStyles.titleLink}>{title}</a>
                  </Link>
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
      {/* <Image
        src={tree}
        alt="Tree"
        priority
        className={utilStyles.tree}
        layout="fixed"
        height={100}
      /> */}
    </Layout>
  );
}
