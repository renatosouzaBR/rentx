import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(8)}px;
`;

export const IconWrapper = styled.View`
  height: ${RFValue(55)}px;
  width: ${RFValue(56)}px;
  margin-right: ${RFValue(2)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 ${RFValue(23)}px;

  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;
