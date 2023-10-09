import React from "react";
import { AppShell, Burger, Container, MantineProvider } from "@mantine/core";
import { theme } from "../config/theme";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

const Layout = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 56 }} padding="md">
        <AppShell.Header>
          <HeaderMenu />
        </AppShell.Header>
        <AppShell.Main>
          <Container>{children}</Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};

export default Layout;
