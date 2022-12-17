import { ProjectsContext } from "contexts/projectsContext";
import { useContext } from "react";

export function useProjectsContext() {
  const { setProjects, projects } = useContext(ProjectsContext);

  return {
    setProjects,
    projects,
  };
}
