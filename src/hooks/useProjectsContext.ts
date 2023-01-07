import { ProjectsContext } from "contexts/projectsContext";
import { useContext } from "react";

export function useProjectsContext() {
  const { projects } = useContext(ProjectsContext);

  if (!projects) {
    throw new Error("Context used outside of its Provider!");
  }

  return {
    projects,
  };
}
