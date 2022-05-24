import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { CarCard } from "../../components/CarCard";
import { Container, Header, LogoImage, TotalCar } from "./styles";

const carOne = {
  name: "audi",
  model: "RS 5 Coupé",
  rent: {
    period: "ao dia",
    price: 120,
  },
  thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
};

const carTwo = {
  name: "Porsche",
  model: "Panamera",
  rent: {
    period: "ao dia",
    price: 340,
  },
  thumbnail:
    "https://w7.pngwing.com/pngs/722/297/png-transparent-2012-porsche-panamera-sports-car-porsche-cayenne-porsche-compact-car-car-vehicle.png",
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

      <CarCard data={carOne} />
      <CarCard data={carTwo} />
    </Container>
  );
}
