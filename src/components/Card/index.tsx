import { useProjectsContext } from "hooks/useProjectsContext";
import { useTranslation } from "next-i18next";

import { Button } from "../Button";

import * as S from "./style";

export function Card() {
  const { projects } = useProjectsContext();

  const { t } = useTranslation("common");

  return (
    <>
      {projects.map(({ title, image, description, link }) => (
        <S.Card data-aos="fade-right" key={title}>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <Button link={link}>{t("projects.button")}</Button>
          </S.Info>
          <S.Image src={image} alt="Image Project" />
        </S.Card>
      ))}
    </>
  );
}
