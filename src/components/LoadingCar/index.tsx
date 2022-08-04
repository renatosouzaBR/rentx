import React from "react";
import LottieView from "lottie-react-native";

import CarAnimation from "../../assets/car-animation.json";
import { Container } from "./styles";

export function LoadingCar() {
  return (
    <Container>
      <LottieView source={CarAnimation} style={{ height: 150 }} autoPlay loop />
    </Container>
  );
}
