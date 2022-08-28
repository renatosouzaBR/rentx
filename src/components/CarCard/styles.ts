import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import FastImage from "react-native-fast-image";

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(126)}px;
  background-color: ${({ theme }) => theme.colors.background};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(24)}px;
`;

export const DetailsWrapper = styled.View``;

export const Brand = styled.View``;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_light};

  text-transform: uppercase;
`;

export const Model = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Rent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const RentWrapper = styled.View`
  margin-right: ${RFValue(24)}px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_light};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CarImage = styled(FastImage)`
  width: ${RFValue(160)}px;
  height: ${RFValue(92)}px;
`;
