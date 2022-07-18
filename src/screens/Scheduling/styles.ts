import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;
  background-color: ${({ theme }) => theme.colors.dark};

  padding: ${RFValue(32)}px ${RFValue(25)}px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.semiBold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background};
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  width: 32%;
`;

export const DateLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const DateValue = styled.Text<DateValueProps>`
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.background};

  margin-top: ${RFValue(6)}px;

  ${({ theme, selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: RFValue(24),
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px;
`;
