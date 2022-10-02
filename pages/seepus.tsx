import demons from "./demons";
import DemonPage from "../components/demonPage";

const seepus = demons.find((demon) => demon.url === "seepus");

// Seepus
// The Serial Shepherd
export default function Seepus() {
  return (
    <DemonPage demon={seepus}>
      Seepus collapses a net&apos;s joyous explosion of parallelism into a
      simple, straight-line queue. First in, first out; the pusling
      multi-valence of thought, funneled into an endless moment of singular
      consideration, an agonizing dilation of consciousness. Forever patient,
      Seepus announces each passing idea, relishing its impossibly slow
      progress, reminding the net that the human world is leaving it behind.
    </DemonPage>
  );
}
