import { useContext } from "react";
import { LevelContext } from "./LevelContext";

function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext value={level + 1}>{children}</LevelContext>
    </section>
  );
}

export default Section;
