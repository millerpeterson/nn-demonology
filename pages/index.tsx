import demons, {
  demonLink,
  demonNameRank,
  randomDemonImageIndex,
} from "../lib/demons";
import Link from "next/link";
import Head from "next/head";
import BookPage from "../components/bookPage";
import cover1 from "public/images/index/605266220_18th_century_woodcut__demon_neuron_reading_a_book__red_highlights.png";
import cover2 from "public/images/index/152294884_18th_century_woodcut__demon_reading__neuron.png";
import cover3 from "public/images/index/400448717_18th_century_woodcut__demon_reading__neuron.png";
import cover4 from "public/images/index/462734927_18th_century_woodcut__demon_reading__neuron.png";
import cover5 from "public/images/index/1118108942_18th_century_woodcut__demon_reading__neuron.png";
import cover6 from "public/images/index/1304279783_18th_century_woodcut__demon_reading__neuron.png";
import cover7 from "public/images/index/2148090756_18th_century_woodcut__demon_reading__neuron.png";
import styles from "../styles/index.module.scss";
import { useEffect, useState } from "react";
import { randomIndexExcluding } from "../lib/random";

const images = [cover1, cover2, cover3, cover4, cover5, cover6, cover7];

function DemonEntry({ demon }) {
  const { title } = demon;
  return (
    <li>
      <Link href={demonLink(demon, randomDemonImageIndex(demon, -1))}>
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
  const [morphedImage, setMorphedImage] = useState(null);
  const [morphedIndex, setMorphedIndex] = useState(0);
  const [hasSeenHelp, setHasSeenHelp] = useState(null);

  useEffect(() => {
    setHasSeenHelp(window.localStorage.getItem("SEEN_HELP"));
  }, [setHasSeenHelp]);

  function morphImage() {
    const newIndex = randomIndexExcluding(images, morphedIndex);
    setMorphedIndex(newIndex);
    setMorphedImage(images[newIndex]);
  }

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
      {hasSeenHelp === null && (
        <div className={styles.help} style={{ opacity: helpVisible ? 0.9 : 0 }}>
          <div className={styles.helpText}>Click image to morph</div>
        </div>
      )}
      <BookPage
        image={morphedImage ?? cover1}
        linkIndex={false}
        onImageClick={() => {
          setHelpVisible(false);
          morphImage();
          window.localStorage.setItem("SEEN_HELP", "true");
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
