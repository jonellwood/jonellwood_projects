import Image from "next/image";
import tree from "../public/images/tree.svg";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function () {
  return (
    <footer className={styles.footer}>
      <Image
        src={tree}
        alt="Tree"
        priority
        layout="fixed"
        className={utilStyles.tree}
        height={150}
      />
      <p>
        Site made with <a href="https://nextjs.org/">NextJS</a>
      </p>
    </footer>
  );
}
