import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 60px 0;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.semiBold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background};

  margin-top: 46px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_light};
  text-align: center;
  line-height: ${RFValue(25)}px;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  padding: 80px 0 0 0;
`;
