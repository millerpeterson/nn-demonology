import demons from "../../lib/demons";
import DemonPage from "../../components/demonPage";

const lasser = demons.find((demon) => demon.url === "lasser");

export default function Lasser() {
  return <DemonPage demon={lasser} />;
}
