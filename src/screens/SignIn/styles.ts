import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_light};
  padding: 0 ${RFValue(24)}px;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${RFValue(115)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.semiBold};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(25)}px;

  margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin: ${RFValue(64)}px 0;
`;

export const Footer = styled.View`
  width: 100%;
`;
