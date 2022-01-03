import Head from "next/head";
import type { NextPage } from "next";
import Navbar from "../components/UI/Navbar";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

import styled from "styled-components";

const H1 = styled.h1`
  margin-top: 5000px;
`;

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Caixeta front end</title>
      </Head>
      <Navbar />
      <H1>oi</H1>
    </ThemeProvider>
  );
};

export default Home;
