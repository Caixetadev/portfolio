import { createContext, ReactNode } from "react";

import { IProjects } from "types";

type ProjectsProvider = { children: ReactNode; projects: IProjects[] };

interface IProjectsContext {
  projects: IProjects[];
}

export const ProjectsContext = createContext<IProjectsContext>(
  {} as IProjectsContext
);

export const ProjectsProvider = ({ children, projects }: ProjectsProvider) => {
  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
