import demonPages, {
  Demon,
  demonLink,
  randomDemonImageIndex,
} from "../lib/demons";
import Head from "next/head";
import { useEffect, useState } from "react";
import BookPage from "./bookPage";
import { useRouter } from "next/router";

interface DemonPageProps {
  demon: Demon;
  imageIndex?: number;
}

export default function DemonPage({ demon }: DemonPageProps) {
  const { name, title, images, rank, backgroundColor } = demon;

  const router = useRouter();
  const initialImageIndex = router.isReady ? parseInt(router.query.id[0]) : 0;

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

  useEffect(() => {
    if (prevPage) {
      setPrevImageIndex(randomDemonImageIndex(prevPage));
    }
    if (nextPage) {
      setNextImageIndex(randomDemonImageIndex(nextPage));
    }
  }, [prevPage, nextPage]);

  return (
    <>
      <Head>
        <style>
          {`
            body {
              background-color: ${backgroundColor};
            }
          `}
        </style>
      </Head>
      <BookPage
        image={images[initialImageIndex]}
        prevPage={`${prevPage?.rank}. ${prevPage?.name}`}
        prevPageHref={demonLink(prevPage, prevImageIndex)}
        nextPage={`${nextPage?.rank}. ${nextPage?.name}`}
        nextPageHref={demonLink(nextPage, nextImageIndex)}
      >
        <h1>{rank}</h1>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </BookPage>
    </>
  );
}
