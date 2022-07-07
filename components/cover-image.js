// import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function CoverImage({ title, src, id, height, width }) {
  const image = (
    <img
      src={src}
      alt={`cover Image for ${id}`}
      // className={`utilStyles ${id}`}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div className={utilStyles.imageWrapper}>
      {id ? (
        <Link href={`/posts/${id}`}>
          <a>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
