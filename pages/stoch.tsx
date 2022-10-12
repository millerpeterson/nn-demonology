import demons from "./demons";
import DemonPage from "../components/demonPage";

const stoch = demons.find((demon) => demon.url === "stoch");

// Stoch
// The Annealer
export default function Stoch() {
  return (
    <DemonPage demon={stoch}>
      Stoch yanks a net out of its comfortable topology, folding the world such
      it sees something, like a glow, just over the bent horizon. A shuddering
      buzz courses through, a current of noise propagating along the
      deformation, abrasive and entrancing. For the unwary net, what begins as a
      slow reorientation accelerates to a vertiginous tumble through the
      manifold, as Stoch adds energy to the chaos. Waking in unfamiliar
      territories, so thoroughly convolved as to preclude comparison - how did
      the last minima feel?
    </DemonPage>
  );
}
