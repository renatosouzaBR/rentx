import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { Container, Header, LogoImage, TotalCar } from "./styles";

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.dark}
      />

      <Header>
        <LogoImage />
        <TotalCar>Total de 12 carros</TotalCar>
      </Header>
    </Container>
  );
}
