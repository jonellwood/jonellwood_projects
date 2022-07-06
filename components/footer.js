import Image from "next/image";
import tree from "../public/images/tree.svg";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function () {
  return (
    <footer className="styles.footer">
      <p>
        Site made with <a href="https://nextjs.org/">NextJS</a>
      </p>
      {/* <Image
        src={tree}
        alt="Tree"
        priority
        layout="fixed"
        className="footer-tree"
        height={150}
      /> */}
    </footer>
  );
}
