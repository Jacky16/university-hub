import { Container } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Container as={"main"} maxWidth={"8xl"} lang={"en"}>
      {children}
    </Container>
  </>
);

export default Layout;
