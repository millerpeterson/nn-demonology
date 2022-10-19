import demons from "../../lib/demons";
import DemonPage from "../../components/demonPage";

const stoch = demons.find((demon) => demon.url === "stoch");

export default function Stoch() {
  return <DemonPage demon={stoch} />;
}
