const title = "Caixeta dev - Front End Developer."
const description = "Programador Front End iniciante."

const SEO = {
  title,
  description,
  canonical: "https://portfolio2-0-brown.vercel.app/",
  openGraph: {
    type: "website",
    locale: "pt-BR",
    url: "https://portfolio2-0-brown.vercel.app/",
    title,
    description,
    images: [
      {
        url: "https://github.com/Caixetadev/portfolio2.0/blob/main/public/assets/home.png?raw=true",
        alt: title,
        width: 1200,
        height: 720
      }
    ]
  }
}

export default SEO