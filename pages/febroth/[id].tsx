import demons from "../../lib/demons";
import DemonPage from "../../components/demonPage";

const febroth = demons.find((demon) => demon.url === "febroth");

export default function Febroth() {
  return <DemonPage demon={febroth} />;
}
