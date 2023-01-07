import { memo } from "react";

import Image from "next/image";

import Globe from "/public/assets/globe.svg";

import { useGetLanguageOptions } from "./hooks/useGetLanguageOptions";
import { useOnChangeLanguage } from "./hooks/useOnChangeLanguage";

import { Dropdown } from "../Dropdown";

import * as S from "./style";

function GlobeDropdown() {
  const { options } = useGetLanguageOptions();
  const { onChangeLanguage } = useOnChangeLanguage();

  return (
    <Dropdown
      title={<Image src={Globe.src} width={20} height={20} alt="Globo" />}
    >
      <S.Content>
        {options.map(({ flag, name, value }) => (
          <S.Option key={name} onClick={onChangeLanguage(value)}>
            <Image src={flag} alt={name} width={20} height={20} />
            <span>{name}</span>
          </S.Option>
        ))}
      </S.Content>
    </Dropdown>
  );
}

export default memo(GlobeDropdown);
