import demonPages, {
  Demon,
  demonLink,
  demonNameRank,
  randomDemonImageIndex,
} from "../lib/demons";
import Head from "next/head";
import { useEffect, useState } from "react";
import BookPage from "./bookPage";
import { useRouter } from "next/router";
import styles from "./demonPage.module.scss";

interface DemonPageProps {
  demon: Demon;
  imageIndex?: number;
}

export default function DemonPage({ demon }: DemonPageProps) {
  const { name, title, images, rank, backgroundColor } = demon;

  const router = useRouter();

  const imageIndex = router.isReady ? parseInt(router.query.id[0]) : 0;

  const [prevImageIndex, setPrevImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(0);

  const prevPage =
    rank > 1
      ? demonPages.find((demonPage) => demonPage.rank === rank - 1)
      : null;
  const nextPage =
    rank < Math.max(...demonPages.map((page) => page.rank))
      ? demonPages.find((demonPage) => demonPage.rank === rank + 1)
      : null;

  const nextPageTitle = nextPage ? demonNameRank(nextPage) : "About";
  const nextPageHref = nextPage
    ? demonLink(nextPage, nextImageIndex)
    : "https://github.com/millerpeterson/nn-demonology";

  useEffect(() => {
    if (prevPage) {
      setPrevImageIndex(randomDemonImageIndex(prevPage, -1));
    }
    if (nextPage) {
      setNextImageIndex(randomDemonImageIndex(nextPage, -1));
    }
  }, [prevPage, nextPage]);

  return (
    <>
      <Head>
        <title>
          {rank}. {name} - {title}
        </title>
        <style>
          {`
            body {
              background-color: ${backgroundColor};
            }
          `}
        </style>
      </Head>
      <BookPage
        image={images[imageIndex]}
        imageHref={demonLink(demon, randomDemonImageIndex(demon, imageIndex))}
        prevPage={demonNameRank(prevPage)}
        prevPageHref={demonLink(prevPage, prevImageIndex)}
        nextPage={nextPageTitle}
        nextPageHref={nextPageHref}
      >
        <h1>{demonNameRank(demon)}</h1>
        <h2 className={styles.title}>{title}</h2>
      </BookPage>
    </>
  );
}
