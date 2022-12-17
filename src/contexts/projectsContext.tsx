import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { IProjects } from "types";

type ProjectsProvider = { children: ReactNode };

interface IProjectsContext {
  projects: IProjects[];
  setProjects: Dispatch<SetStateAction<IProjects[]>>;
}

export const ProjectsContext = createContext<IProjectsContext>(
  {} as IProjectsContext
);

export const ProjectsProvider = ({ children }: ProjectsProvider) => {
  const [projects, setProjects] = useState<IProjects[]>([]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
