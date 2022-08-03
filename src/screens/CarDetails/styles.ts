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

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
  line-height: ${RFValue(25)}px;

  margin-top: ${RFValue(24)}px;
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
