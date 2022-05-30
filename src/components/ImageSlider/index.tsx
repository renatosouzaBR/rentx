import React from "react";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarWrapper,
  CarImage,
} from "./styles";

interface ImageSliderProps {
  imagesURL: string[];
}

export function ImageSlider(props: ImageSliderProps) {
  const { imagesURL } = props;

  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarWrapper>
        <CarImage source={{ uri: imagesURL[0] }} resizeMode="contain" />
      </CarWrapper>
    </Container>
  );
}
