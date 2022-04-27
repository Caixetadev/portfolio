import { ReactNode } from "react";

export interface ITechs {
  icon: JSX.Element;
  lang: string;
}

export interface IProjects {
  name: string;
  image: string;
  description: string;
  language: string;
  language2: string;
  language3?: string;
  linkRepo: string;
  linkPreview: string;
}

export interface ISectionTitleProps {
  title: string;
}
