import demons from "../../lib/demons";
import DemonPage from "../../components/demonPage";

const baeyasul = demons.find((demon) => demon.url === "baeyasul");

export default function Baeyasul() {
  return <DemonPage demon={baeyasul} />;
}
