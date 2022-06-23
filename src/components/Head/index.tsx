import Head from "next/head";

import Banner from "/public/assets/banner.png";

export function Header() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rafael Caixeta | Front-end Developer | Portfolio</title>
      <meta
        name="title"
        content="Rafael Caixeta | Front-end Developer | Portfolio"
      />
      <meta
        name="description"
        content="Olá me chamo Rafael Caixeta e este é meu portfólio, tenho 18 anos e"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Rafael Caixeta" />
      <meta
        name="keywords"
        content="rafael caixeta, web designer, caixeta dev, 
          desenvolvedor, programador, front-end, developer, typescript,
          reactjs, nextjs, caixetadev, caixeta portfolio, rafael caixeta portfolio,
          developer front-end, javascript, caixeta, desenvolver sites"
      />
      <meta property="og:url" content="https://caixeta.vercel.app" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Rafael Caixeta | Front-end Developer | Portfolio"
      />
      <link rel="canonical" href="https://caixeta.vercel.app" />
      <meta
        property="og:description"
        content="Especialista em desenvolvimento Front-End"
      />
      <meta property="og:locale" content="pt_BR" />
      <meta name="revisit-after" content="1 day" />
      <meta property="og:image" content={Banner.src} />
      <meta
        name="google-site-verification"
        content="HxtN4KKzJBUUH15aqX9noITMXUkG1EeMkggR1kpEb6s"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://caixeta.vercel.app" />
      <meta
        property="twitter:title"
        content="Rafael Caixeta | Front-end Developer | Portfolio"
      />
      <meta
        property="twitter:description"
        content="Especialista em desenvolvimento Front-End"
      />
      <meta property="twitter:image" content={Banner.src} />
    </Head>
  );
}
