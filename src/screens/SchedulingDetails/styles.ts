import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  margin-top: ${RFValue(40)}px;
`;

export const BackButtonWrapper = styled.View`
  position: absolute;
  left: ${RFValue(26)}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(24),
  },
})``;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_light};

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_light};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Accessories = styled.View`
  width: 100%;
  margin-top: ${RFValue(16)}px;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px;

  background-color: ${({ theme }) => theme.colors.background_light};
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;

  padding: 40px 0 16px 0;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.text_light};
`;

export const CalendarIcon = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
`;

export const DateInfo = styled.View``;

export const DateLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RentalPrice = styled.View`
  width: 100%;

  padding: 16px 0;
  justify-content: space-between;
`;

export const RentalPriceLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const RentalDaily = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RentalTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.success};
  line-height: ${RFValue(24)}px;
`;
