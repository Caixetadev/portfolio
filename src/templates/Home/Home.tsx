import { useEffect } from "react";

import Aos from "aos";

import { About, ButtonTop, Hero, Projects } from "components";

import { Layout } from "components/Layout";

import "aos/dist/aos.css";

export function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <ButtonTop />
    </Layout>
  );
}
