import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";

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

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider(props: ImageSliderProps) {
  const { imagesURL } = props;
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesURL.map((_, index) => (
          <ImageIndex key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesURL}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CarWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}
