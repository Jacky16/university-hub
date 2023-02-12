import { Container } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Container as={"main"} maxWidth={"4xl"}>
    {children}
  </Container>
);

export default Layout;
