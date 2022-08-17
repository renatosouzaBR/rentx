import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { CarDTO } from "../../dtos/carDto";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

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
} from "./styles";

interface CarCardProps extends RectButtonProps {
  data: CarDTO;
}

export function CarCard(props: CarCardProps) {
  const { data, ...rest } = props;
  const { name, brand, period, price, thumbnail, fuel_type } = data;
  const CategoryIcon = getAccessoryIcon(fuel_type);

  return (
    <Container {...rest}>
      <DetailsWrapper>
        <Brand>
          <Name>{brand}</Name>
          <Model>{name}</Model>
        </Brand>

        <Rent>
          <RentWrapper>
            <Period>{period}</Period>
            <Price>R$ {price}</Price>
          </RentWrapper>

          <CategoryIcon />
        </Rent>
      </DetailsWrapper>

      <CarImage source={{ uri: thumbnail }} resizeMode="contain" />
    </Container>
  );
}
