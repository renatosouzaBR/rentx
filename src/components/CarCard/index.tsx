import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useNetInfo } from "@react-native-community/netinfo";

import { Car as ModelCar } from "../../database/model/car";
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
  data: ModelCar;
}

export function CarCard(props: CarCardProps) {
  const { data, ...rest } = props;
  const { name, brand, period, price, thumbnail, fuel_type } = data;
  const CategoryIcon = getAccessoryIcon(fuel_type);

  const netInfo = useNetInfo();

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
            <Price>R$ {netInfo.isConnected ? price : "..."}</Price>
          </RentWrapper>

          <CategoryIcon />
        </Rent>
      </DetailsWrapper>

      <CarImage source={{ uri: thumbnail }} resizeMode="contain" />
    </Container>
  );
}
