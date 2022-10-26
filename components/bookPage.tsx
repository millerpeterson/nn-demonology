import styles from "./bookPage.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function BookPage(props) {
  const {
    image,
    imageAlt,
    imageHref,
    prevPage,
    prevPageHref,
    nextPage,
    nextPageHref,
    linkIndex = true,
    children,
    onImageClick = null,
  } = props;

  const nextImage = <Image src={image} alt={imageAlt} onClick={onImageClick} />;

  return (
    <section className={styles.page}>
      <div className={styles.image}>
        {imageHref ? <Link href={imageHref}>{nextImage}</Link> : nextImage}
      </div>
      <div className={styles.text}>{children}</div>
      <div className={styles.footerLinks}>
        {prevPageHref ? (
          <Link href={prevPageHref}>
            <a>{prevPage}</a>
          </Link>
        ) : (
          <div />
        )}
        {linkIndex && (
          <Link href="/">
            <a className={styles.middle}>Index</a>
          </Link>
        )}
        {nextPageHref ? (
          <Link href={nextPageHref}>
            <a>{nextPage}</a>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
