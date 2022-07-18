import React from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import {
  Calendar as CustomCalendar,
  DateData,
  LocaleConfig,
} from "react-native-calendars";

import { ptBR } from "./localeConfig";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export interface MarkedDateProps {
  [date: string]: MarkingProps;
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress(day: DateData): void;
}

export function Calendar(props: CalendarProps) {
  const { markedDates, onDayPress } = props;
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={RFValue(24)}
          color={theme.colors.text}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_light,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.inter.regular,
        textDayFontSize: 15,
        textDayHeaderFontFamily: theme.fonts.archivo.semiBold,
        textDayHeaderFontSize: 10,
        monthTextColor: theme.colors.title,
        textMonthFontFamily: theme.fonts.archivo.semiBold,
        textMonthFontSize: 20,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date().toString()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}
