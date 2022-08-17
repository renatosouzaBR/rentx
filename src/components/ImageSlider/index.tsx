import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";

import { Bullet } from "../Bullet";
import { Container, ImageIndexes, CarWrapper, CarImage } from "./styles";

interface ImageSliderProps {
  imagesURL: {
    id: string;
    photo: string;
  }[];
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
        {imagesURL.map((item, index) => (
          <Bullet key={String(item.id)} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesURL}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarWrapper>
            <CarImage source={{ uri: item.photo }} resizeMode="contain" />
          </CarWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}
