import { Container } from "../../../styles/global";
import swal from "sweetalert";
import SectionProjects from "./style";

export default function Projects({ projects }) {
  console.log(projects);
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
