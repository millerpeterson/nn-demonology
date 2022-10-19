import demons, { Demon } from "../lib/demons";
import Link from "next/link";
import Head from "next/head";
import BookPage from "../components/bookPage";
import cover1 from "public/images/index/3508800080_18th_century_woodcut__evil__book__neuron__crimson.png";

function DemonEntry({ rank, url, name, title }: Demon) {
  return (
    <li>
      <Link href={url}>
        <a>
          {rank}. {name} - {title}
        </a>
      </Link>
    </li>
  );
}

export default function Home() {
  const sortedDemons = demons.sort((da, db) => da.rank - db.rank);
  return (
    <>
      <Head>
        <style>
          {`
            body {
              background-color: rgb(218, 214, 211);
            }
          `}
        </style>
      </Head>
      <BookPage image={cover1} linkIndex={false}>
        <h1>Index Cerebri Daemonus</h1>
        <ul>
          {sortedDemons.map((demon) => (
            <DemonEntry key={demon.name} {...demon} />
          ))}
        </ul>
      </BookPage>
    </>
  );
}
