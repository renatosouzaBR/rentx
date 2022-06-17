import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import SpeedSvg from "../../assets/speed.svg";
import UpSvg from "../../assets/up.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  BackButtonWrapper,
  Container,
  Header,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateLabel,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalDaily,
  RentalTotal,
} from "./styles";

export function SchedulingDetails() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={theme.colors.background}
      />

      <Header>
        <BackButtonWrapper>
          <BackButton />
        </BackButtonWrapper>

        <ImageSlider
          imagesURL={["https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png"]}
        />
      </Header>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={UpSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto " icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(20)}
              color={theme.colors.background}
            />
          </CalendarIcon>

          <DateInfo>
            <DateLabel>DE</DateLabel>
            <DateValue>18/04/2022</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(16)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateLabel>ATÉ</DateLabel>
            <DateValue>18/04/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalDaily>R$ 580 x3 diárias</RentalDaily>
            <RentalTotal>R$ 2.900</RentalTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={() => {}}
        />
      </Footer>
    </Container>
  );
}
