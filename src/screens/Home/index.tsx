import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { CarCard } from "../../components/CarCard";
import { CarList, Container, Header, LogoImage, TotalCar } from "./styles";

const carOne = {
  name: "audi",
  model: "RS 5 Coupé",
  rent: {
    period: "ao dia",
    price: 120,
  },
  thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
};

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

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={(item) => <CarCard data={carOne} />}
      />
    </Container>
  );
}
