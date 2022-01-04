import { Container } from "../../../styles/global";
import { SectionHome } from "./style";

export default function Home(): JSX.Element {
  return (
    <SectionHome>
      <div className="bg">
        <div className="rigth"></div>
        <div className="left"></div>
        <div className="cont">
          <span>Hi, my name is</span>
          <h1>CAIXETA</h1>
          <h2>FRONT END DEVELOPER</h2>
        </div>
      </div>
      <Container></Container>
    </SectionHome>
  );
}
