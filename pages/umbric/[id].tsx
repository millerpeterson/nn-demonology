import demons from "../../lib/demons";
import DemonPage from "../../components/demonPage";

const umbric = demons.find((demon) => demon.url === "umbric");

export default function Umbric() {
  return <DemonPage demon={umbric} />;
}
