import demons from "../../lib/demons";
import DemonPage from "../../components/demonPage";

const seepus = demons.find((demon) => demon.url === "seepus");

export default function Seepus() {
  return <DemonPage demon={seepus} />;
}
