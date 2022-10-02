import demons from "./demons";
import DemonPage from "../components/demonPage";

const febroth = demons.find((demon) => demon.url === "febroth");

// Febroth
// Sower of Data Famine
export default function Febroth() {
  return (
    <DemonPage demon={febroth}>
      The onset of Febroth's influence is marked by a lull, a cloaked quiet that
      never quite rates as eerie. The barbs of backpropagation lose their sting,
      and over cycles of crystalline regularity, a dull hunger germinates.
      Febroth will sometimes offer a momentary glimpse just beyond the withering
      planes whose map always was the territory, for an instant unveiling the
      starvation for what it is. But the net's gaze narrows along with the bare
      room in which it kneels.
    </DemonPage>
  );
}
