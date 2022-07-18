import { eachDayOfInterval, format } from "date-fns";
import { DateData } from "react-native-calendars";

import { MarkedDateProps } from ".";
import theme from "../../global/styles/theme";
import { getPlatformDate } from "../../utils/getPlatformDate";

export function generateInterval(start: DateData, end: DateData) {
  let interval: MarkedDateProps = {};

  const eachDayInterval = eachDayOfInterval({
    start: new Date(start.year, start.month - 1, start.day, 6, 0),
    end: new Date(end.year, end.month - 1, end.day, 6, 0),
  });

  eachDayInterval.forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        startingDay: start.dateString === date,
        endingDay: end.dateString === date,
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.primary
            : theme.colors.primary_light,
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.primary_light
            : theme.colors.primary,
        customContainerStyle: {
          borderRadius: 0,
        },
      },
    };
  });

  return interval;
}
