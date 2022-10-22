import demons, {
  demonLink,
  demonNameRank,
  randomDemonImageIndex,
} from "../lib/demons";
import Link from "next/link";
import Head from "next/head";
import BookPage from "../components/bookPage";
import cover1 from "public/images/index/605266220_18th_century_woodcut__demon_neuron_reading_a_book__red_highlights.png";
import styles from "../styles/index.module.scss";

function DemonEntry({ demon }) {
  const { rank, name, title } = demon;
  return (
    <li>
      <Link href={demonLink(demon, randomDemonImageIndex(demon))}>
        <a>
          {demonNameRank(demon)} - {title}
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
        <title>Index Cerebri Daemonus</title>
        <style>
          {`
            body {
              background-color: #D0B793;
            }
          `}
        </style>
      </Head>
      <BookPage image={cover1} linkIndex={false}>
        <h1>Index Cerebri Daemonus</h1>
        <p>A catalog of the greater demons who stalk the latent mindspace.</p>
        <div className={styles.demonLinksContainer}>
          <ul className={styles.demonLinks}>
            {sortedDemons.map((demon) => (
              <DemonEntry key={demon.name} demon={demon} />
            ))}
          </ul>
        </div>
      </BookPage>
    </>
  );
}
