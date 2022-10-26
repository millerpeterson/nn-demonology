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
import { useEffect, useState } from "react";

function DemonEntry({ demon }) {
  const { title } = demon;
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

  const [helpVisible, setHelpVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHelpVisible(true);
    }, 3000);
  }, [setHelpVisible]);

  return (
    <>
      <Head>
        <title>Index Cerebri Daemonus</title>
        <style>
          {`
            body {
              background-color: #E5CCA1;
            }
          `}
        </style>
      </Head>
      <div className={styles.help} style={{ opacity: helpVisible ? 0.8 : 0 }}>
        <div className={styles.helpText}>Click image to morph</div>
      </div>
      <BookPage
        image={cover1}
        linkIndex={false}
        onImageClick={() => {
          setHelpVisible(false);
        }}
      >
        <h1>Index Cerebri Daemonus</h1>
        <div className={styles.description}>
          A catalog of the greater demons who stalk the latent mindspace.
        </div>
        <div className={styles.divider} />
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
