import common from "../../public/locales/en-US/common.json";

export interface ITechs {
  icon: JSX.Element;
  color: string;
}

export interface IProjects {
  title: string;
  image: string;
  description: string;
  link: string;
}

export interface Resources {
  common: typeof common;
  // as many as files you have
}
