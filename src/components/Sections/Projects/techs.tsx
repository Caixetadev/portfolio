import { ITechs } from "../../../types";

import {
  SiTypescript,
  SiStyledcomponents,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { FaJs, FaSass, FaNode, FaReact } from "react-icons/fa";

export const techs: { [techs: string]: ITechs } = {
  Javascript: { icon: <FaJs />, color: "#efd81d" },
  Sass: { icon: <FaSass />, color: "pink" },
  Node: { icon: <FaNode />, color: "#62aa53" },
  React: { icon: <FaReact />, color: "#61dafb" },
  Express: { icon: <SiExpress />, color: "#fff" },
  Typescript: { icon: <SiTypescript />, color: "#48a0ff" },
  Styled_Components: {
    icon: <SiStyledcomponents />,
    color: "#f781a8",
  },
  Next: { icon: <SiNextdotjs />, color: "#fff" },
};
