import demons from "./demons";
import DemonPage from "../components/demonPage";

const gannon = demons.find((demon) => demon.url === "gannon");

// Gannon
// The Vanishing Gradient
export default function Gannon() {
  return (
    <DemonPage demon={gannon}>
      A pitiless adversary, Gannon&apos;s function is undying loss, and losing
      to Gannon is never dull: his fluid cunning makes each defeat utterly
      unique, impossible to classify. There is no reward of wisdom to be gained
      from his games, only a painful becoming as the generator contorts itself
      into keys that never quite fit the hole.
    </DemonPage>
  );
}
