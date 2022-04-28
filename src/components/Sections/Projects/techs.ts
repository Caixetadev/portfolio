import { ITechs } from "../../../types";

import { SiTypescript, SiStyledcomponents, SiExpress } from "react-icons/si";
import { FaJs, FaSass, FaNode, FaReact } from "react-icons/fa";

export const techs: { [techs: string]: ITechs } = {
  Javascript: { lang: "js", icon: FaJs },
  Sass: { lang: "sass", icon: FaSass },
  Node: { lang: "node", icon: FaNode },
  React: { lang: "react", icon: FaReact },
  Express: { lang: "express", icon: SiExpress },
  Typescript: { lang: "ts", icon: SiTypescript },
  Styled_Components: { lang: "styled", icon: SiStyledcomponents },
};
