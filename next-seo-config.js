const title = "Caixeta dev - Front End Developer."
const description = "Programador Front End."

const SEO = {
  title,
  description,
  canonical: "https://caixeta.vercel.app/",
  openGraph: {
    type: "website",
    locale: "pt-BR",
    url: "https://caixeta.vercel.app/",
    title,
    description,
    images: [
      {
        url: "https://i.ibb.co/BGCNXKr/home.png",
        alt: title,
        width: 1200,
        height: 720
      }
    ]
  }
}

export default SEO