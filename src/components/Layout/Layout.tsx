import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { LayoutProps } from "./types";

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
