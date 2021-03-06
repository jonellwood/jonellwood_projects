import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footer from "./footer";

const name = "Jon Ellwood";
export const siteTitle = "Jon Ellwood Projects";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <div className={styles.anotherWrapper}>
        <Head>
          <link rel="icon" href="https://fav.farm/%F0%9F%A5%9E" />
          <meta
            name="description"
            content="Projects I have worked on or created"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <div className={styles.headerImage}>
                <Image
                  priority
                  src="/images/English-Jon.jpg"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              </div>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a className={styles.headerImage}>
                  <Image
                    priority
                    src="/images/English-Jon.jpg"
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
