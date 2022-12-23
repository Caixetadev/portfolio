import Link from "next/link";
import Image from "next/image";

import ArrowLeft from "/public/assets/arrow-left.svg";
import { Button } from "components";

import * as S from "./styles";

export function Login() {
  return (
    <S.Section>
      <S.ButtonBack>
        <Link href="/" passHref={true}>
          <Image src={ArrowLeft} alt="seta para esquerda de voltar a página" />
        </Link>
      </S.ButtonBack>
      <S.Form>
        <S.Wrapper>
          <S.ContainerInput>
            <S.Label>User</S.Label>
            <S.Input type="text" />
          </S.ContainerInput>
          <S.Label>Password</S.Label>
          <S.Input type="password" />
          <S.ForgotPassword>Forgot Passowrd?</S.ForgotPassword>
          <S.ContainerButton>
            <Button>sign in</Button>
          </S.ContainerButton>
        </S.Wrapper>
      </S.Form>
    </S.Section>
  );
}
