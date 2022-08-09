import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary};
    `}
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

export const PasswordVisibleWrapper = styled.TouchableOpacity`
  height: ${RFValue(55)}px;
  width: ${RFValue(56)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;
