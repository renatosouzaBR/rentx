import React from "react";

import {
  Container,
  DetailsWrapper,
  Brand,
  Name,
  Model,
  Rent,
  RentWrapper,
  Period,
  Price,
  CarImage,
  CategoryIcon,
} from "./styles";

interface CarData {
  name: string;
  model: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface CarCardProps {
  data: CarData;
}

export function CarCard(props: CarCardProps) {
  const { name, model, rent, thumbnail } = props.data;

  return (
    <Container>
      <DetailsWrapper>
        <Brand>
          <Name>{name}</Name>
          <Model>{model}</Model>
        </Brand>

        <Rent>
          <RentWrapper>
            <Period>{rent.period}</Period>
            <Price>R$ {rent.price}</Price>
          </RentWrapper>

          <CategoryIcon />
        </Rent>
      </DetailsWrapper>

      <CarImage source={{ uri: thumbnail }} resizeMode="contain" />
    </Container>
  );
}
