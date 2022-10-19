import demonPages, { Demon } from "../lib/demons";
import Head from "next/head";
import { useState } from "react";
import BookPage from "./bookPage";

interface DemonPageProps {
  demon: Demon;
}

export default function DemonPage({ demon }: DemonPageProps) {
  const { name, title, images, rank, backgroundColor } = demon;

  const randomImageIndex = () =>
    Math.floor(Math.random() * demon.images.length);

  const [imageIndex] = useState(randomImageIndex());

  const prevPage =
    rank > 1
      ? demonPages.find((demonPage) => demonPage.rank === rank - 1)
      : null;
  const nextPage =
    rank < Math.max(...demonPages.map((page) => page.rank))
      ? demonPages.find((demonPage) => demonPage.rank === rank + 1)
      : null;

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
        image={images[imageIndex]}
        prevPage={`${prevPage?.rank}. ${prevPage?.name}`}
        prevPageHref={prevPage?.url}
        nextPage={`${nextPage?.rank}. ${nextPage?.name}`}
        nextPageHref={nextPage?.url}
      >
        <h1>{rank}</h1>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </BookPage>
    </>
  );
}
