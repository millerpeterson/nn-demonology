import demons, { Demon } from "../lib/demons";
import Link from "next/link";

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
    <ul>
      {sortedDemons.map((demon) => (
        <DemonEntry key={demon.name} {...demon} />
      ))}
    </ul>
  );
}
