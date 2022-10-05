import { ReactNode } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Header";

type MainProps = { children: ReactNode };

export function Main({ children }: MainProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
