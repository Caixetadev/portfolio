import { useTranslation } from "next-i18next";

import FlagBr from "/public/assets/br.svg";
import FlagEua from "/public/assets/eua.svg";
import FlagEs from "/public/assets/es.svg";

export function useGetLanguageOptions() {
  const { t } = useTranslation("common");

  const options = [
    {
      flag: FlagEua.src,
      name: t("header.languages.english"),
      value: "en-US",
    },
    {
      flag: FlagBr.src,
      name: t("header.languages.portuguese"),
      value: "pt-BR",
    },
    {
      flag: FlagEs.src,
      name: t("header.languages.spanish"),
      value: "es-ES",
    },
  ];

  return { options };
}
