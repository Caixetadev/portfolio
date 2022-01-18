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
  icons: { icon: string; icon2: string };
}