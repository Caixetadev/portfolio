import Image from "next/image";
import { useRouter } from "next/router";

import { Dropdown } from "../Dropdown";
import { options } from "./options";
import * as S from "./style";

import Globo from "/public/assets/globo.svg";

export function GloboDropdown() {
  const router = useRouter();
  const onChangeLanguage = (lang: string) => () => {
    router.push(router.asPath, undefined, { locale: lang });
  };

  return (
    <Dropdown
      title={<Image src={Globo.src} width={20} height={20} alt="Globo" />}
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
