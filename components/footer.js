import Image from "next/image";
import tree from "../public/images/tree.svg";
import tree2 from "../public/images/tree2.svg";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function () {
  return (
    <footer className={styles.footer}>
      <div className={utilStyles.tree}>
        <Image src={tree} alt="Tree" priority layout="fixed" height={150} />
      </div>
      <div className={utilStyles.tree2}>
        <Image src={tree2} alt="Tree" priority layout="fixed" height={185} />
      </div>
      <p className={utilStyles.footerP}>
        {/* Site created using <a href="https://nextjs.org/">NextJS |</a> */}
        <a href="https://jonellwood.dev"> My Site |</a>
        <a href="https://github.com/jonellwood"> Github |</a>
        <a href="https://resume.jonellwood.dev"> Resume |</a>
        <a href="https://twitter.com/thejonellwood"> Twitter</a>
      </p>
    </footer>
  );
}
