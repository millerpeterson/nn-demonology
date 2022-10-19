import demons from "../../lib/demons";
import DemonPage from "../../components/demonPage";

const gannon = demons.find((demon) => demon.url === "gannon");

export default function Gannon() {
  return <DemonPage demon={gannon} />;
}
