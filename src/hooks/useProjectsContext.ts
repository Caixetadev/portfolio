import { ProjectsContext } from "contexts/projectsContext";
import { useContext } from "react";

export function useProjectsContext() {
  const { projects } = useContext(ProjectsContext);

  return {
    projects,
  };
}
