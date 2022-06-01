import { IProjects } from "../../types";
import { Button } from "../Button";

import * as S from "./style";

export function Card({ projects }: { projects: Array<IProjects> }) {
  return (
    <>
      {projects.map(({ name, image, description, linkPreview }) => (
        <S.Card data-aos="fade-right" key={name}>
          <S.Info>
            <S.Title>{name}</S.Title>
            <S.Description>{description}</S.Description>
            <Button link={linkPreview}>view project</Button>
          </S.Info>
          <S.Image src={image} />
        </S.Card>
      ))}
    </>
  );
}
