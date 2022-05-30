import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { BackButtonWrapper, Container, Header } from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButtonWrapper>
          <BackButton />
        </BackButtonWrapper>

        <ImageSlider
          imagesURL={["https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png"]}
        />
      </Header>
    </Container>
  );
}
