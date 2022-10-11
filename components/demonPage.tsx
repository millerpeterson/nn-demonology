import Image from "next/image";
import Link from "next/link";
import demonPages, { Demon } from "../pages/demons";
import { useInterval } from "../hooks/useInterval";

import styles from "./demonPage.module.scss";
import { Property } from "csstype";
import TextAlign = Property.TextAlign;
import { useState } from "react";

interface DemonLinkProps {
  demon: Demon;
  direction: "next" | "prev";
}

function DemonLink({ demon, direction }: DemonLinkProps) {
  const { url, rank, name } = demon;
  const textStyle: { textAlign: TextAlign } =
    direction === "next" ? { textAlign: "right" } : { textAlign: "left" };
  return (
    <Link href={url}>
      <a style={textStyle}>
        {direction === "prev" && "<"} {rank} - {name}{" "}
        {direction === "next" && ">"}
      </a>
    </Link>
  );
}
interface DemonPageProps {
  demon: Demon;
  children: string;
}

const warpDelay = 5000;

export default function DemonPage({ demon, children }: DemonPageProps) {
  const { name, title, images, rank } = demon;

  const randomImageIndex = () =>
    Math.floor(Math.random() * demon.images.length);

  const [image1Index] = useState(randomImageIndex());
  const [image2Index] = useState(randomImageIndex());

  const [crossfade, setCrossfade] = useState(Math.random);

  function warp() {
    setCrossfade(Math.random());
  }
  useInterval(warp, warpDelay);

  const prevPage =
    rank > 1
      ? demonPages.find((demonPage) => demonPage.rank === rank - 1)
      : null;
  const nextPage =
    rank < Math.max(...demonPages.map((page) => page.rank))
      ? demonPages.find((demonPage) => demonPage.rank === rank + 1)
      : null;

  return (
    <section
      style={{ backgroundColor: demon.backgroundColor }}
      className={styles.demon}
    >
      <div className={styles.image}>
        <div className={styles.imageFrame}>
          <Image
            src={images[image1Index]}
            style={{ opacity: crossfade }}
            alt=""
          />
        </div>
        {images.length > 1 && (
          <div className={styles.imageFrame}>
            <Image
              src={images[image2Index]}
              alt=""
              style={{ opacity: 1.0 - crossfade }}
            />
          </div>
        )}
      </div>
      <div className={styles.text}>
        <div className={styles.description}>
          <h1>{rank}</h1>
          <h2>{name}</h2>
          <h3>{title}</h3>
          <p> {children} </p>
        </div>
        <div className={styles.footerLinks}>
          {prevPage ? <DemonLink demon={prevPage} direction="prev" /> : <div />}
          <Link href="/">
            <a className={styles.middle}>Index</a>
          </Link>
          {nextPage ? <DemonLink demon={nextPage} direction="next" /> : <div />}
        </div>
      </div>
    </section>
  );
}
