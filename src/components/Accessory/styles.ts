import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_light};
  max-width: ${RFValue(109)}px;
  min-width: ${RFValue(90)}px;
  height: ${RFValue(92)}px;

  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(8)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-top: ${RFValue(14)}px;
`;
