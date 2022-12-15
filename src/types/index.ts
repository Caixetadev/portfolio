import common from "../../public/locales/en-US/common.json";

export interface ITechs {
  icon: JSX.Element;
  color: string;
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

export interface Resources {
  common: typeof common;
  // as many as files you have
}
