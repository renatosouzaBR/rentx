import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";

import { Car as ModelCar } from "../../database/model/car";

interface CarProps {
  id: string;
  car: ModelCar;
  start_date: string;
  end_date: string;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background_light};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;
  background-color: ${({ theme }) => theme.colors.dark};

  padding: ${RFValue(32)}px ${RFValue(25)}px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.semiBold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Appointments = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px ${RFValue(24)}px ${RFValue(10)}px ${RFValue(24)}px;
`;

export const AppointmentsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const AppointmentsQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const CarListSeparator = styled.View`
  width: 100%;
  height: ${RFValue(16)}px;
  background-color: transparent;
`;

export const CarList = styled(FlatList as new () => FlatList<CarProps>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 16,
  },
  ItemSeparatorComponent: CarListSeparator,
})``;

export const CarWrapper = styled.View``;

export const CarFooter = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(14)}px ${RFValue(24)}px;
  margin-top: ${RFValue(2)}px;
`;

export const CarFooterTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarFooterDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.title};
`;
