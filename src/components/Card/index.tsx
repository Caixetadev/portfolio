import { useTranslation } from "next-i18next";
import { IProjects } from "../../types";
import { Button } from "../Button";

import * as S from "./style";

export function Card({ projects }: { projects: Array<IProjects> }) {
  const { t } = useTranslation("common");

  return (
    <>
      {projects.map(({ name, image, description, linkPreview }) => (
        <S.Card data-aos="fade-right" key={name}>
          <S.Info>
            <S.Title>{name}</S.Title>
            <S.Description>{description}</S.Description>
            <Button link={linkPreview}>{t("projects.button")}</Button>
          </S.Info>
          <S.Image src={image} />
        </S.Card>
      ))}
    </>
  );
}
