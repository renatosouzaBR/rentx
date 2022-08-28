import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import { useNetInfo } from "@react-native-community/netinfo";

import { CarDTO } from "../../dtos/carDto";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { api } from "../../services/api";

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

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const netInfo = useNetInfo();

  const rentalPrice = Number(dates.length * car.price);
  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriod);
  const [loading, setLoading] = useState(false);

  function handleBack() {
    navigation.goBack();
  }

  async function handleConfirmRental() {
    try {
      setLoading(true);

      await api.post(`/rentals`, {
        user_id: 1,
        car_id: car.id,
        start_date: new Date(`${dates[0]}T09:00:00.000Z`),
        end_date: new Date(`${dates[dates.length - 1]}T09:00:00.000Z`),
      });

      navigation.navigate("Confirmation", {
        title: "Carro alugado!",
        message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.`,
        nextScreenRoute: "Home",
      });
    } catch (error) {
      console.log(error.response);
      Alert.alert(
        "Tente novamente",
        "Não foi possível confirmar o agendamento!"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const startDate = new Date(`${dates[0]}T09:00:00.000Z`);
    const endDate = new Date(`${dates[dates.length - 1]}T09:00:00.000Z`);

    setRentalPeriod({
      start: format(getPlatformDate(startDate), "dd/MM/yyyy"),
      end: format(getPlatformDate(endDate), "dd/MM/yyyy"),
    });
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={theme.colors.background}
      />

      <Header>
        <BackButtonWrapper>
          <BackButton onPress={handleBack} />
        </BackButtonWrapper>

        <ImageSlider imagesURL={car.photos} />
      </Header>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.name}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
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
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(16)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateLabel>ATÉ</DateLabel>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalDaily>
              R$ {car.price} x{dates.length} diárias
            </RentalDaily>
            <RentalTotal>R$ {rentalPrice}</RentalTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          loading={loading}
          enabled={!loading && !!netInfo.isConnected}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
