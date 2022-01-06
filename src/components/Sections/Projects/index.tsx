import { Container } from "../../../styles/global";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import SectionProjects from "./style";

export default function Projects() {
  const [projects, setProjects] = useState<string[]>([]);

  useEffect((): void => {
    async function getProjects(): Promise<void> {
      const url = await fetch("https://apiportfoliocaixeta.herokuapp.com/");
      const data: string[] = await url.json();

      setProjects(data);
    }

    getProjects();
  }, []);

  function onPick() {
    swal("Thanks for your rating!", `You rated us $/3`, "success");
  }

  return (
    <Container>
      <SectionProjects id="projects">
        <h2>Projects</h2>
      </SectionProjects>
    </Container>
  );
}
