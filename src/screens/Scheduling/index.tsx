import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { DateData } from "react-native-calendars";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";

import { generateInterval } from "../../components/Calendar/generateInterval";
import ArrowSvg from "../../assets/arrow.svg";

import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Calendar, MarkedDateProps } from "../../components/Calendar";
import { CarDTO } from "../../dtos/carDto";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateLabel,
  DateValue,
  Content,
  Footer,
} from "./styles";

interface RentalPeriodProps {
  formattedStart: string;
  formattedEnd: string;
}

interface Params {
  car: CarDTO;
}

export function Scheduling() {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const { car } = route.params as Params;

  const [lastSelectedDate, setLastSelectedDate] = useState({} as DateData);
  const [markedDates, setMarkedDates] = useState({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriodProps);

  function handleBack() {
    navigation.goBack();
  }

  function handleSchedulingDetails() {
    const dates = Object.keys(markedDates);
    navigation.navigate("SchedulingDetails", { car, dates });
  }

  function handleChangeDate(day: DateData) {
    let start = !lastSelectedDate.timestamp ? day : lastSelectedDate;
    let end = day;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const startDate = new Date(start.year, start.month - 1, start.day, 6, 0);
    const endDate = new Date(end.year, end.month - 1, end.day, 6, 0);

    setRentalPeriod({
      formattedStart: format(startDate, "dd/MM/yyyy"),
      formattedEnd: format(endDate, "dd/MM/yyyy"),
    });
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.dark}
      />

      <Header>
        <BackButton color="#FFFFFF" onPress={handleBack} />

        <Title>
          Escolha uma{"\n"}
          data de início e{"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateLabel>DE</DateLabel>
            <DateValue selected={!!rentalPeriod.formattedStart}>
              {rentalPeriod.formattedStart}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateLabel>ATÉ</DateLabel>
            <DateValue selected={!!rentalPeriod.formattedEnd}>
              {rentalPeriod.formattedEnd}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleSchedulingDetails}
          disabled={!rentalPeriod.formattedStart || !rentalPeriod.formattedEnd}
        />
      </Footer>
    </Container>
  );
}
