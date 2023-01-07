import { useRouter } from "next/router";

export function useOnChangeLanguage() {
  const router = useRouter();

  const onChangeLanguage = (lang: string) => () => {
    router.push(router.asPath, undefined, { locale: lang });
  };

  return { onChangeLanguage };
}
