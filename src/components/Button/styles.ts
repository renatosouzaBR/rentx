import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps {
  color?: string;
  disabled?: boolean;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: ${RFValue(19)}px;
  margin-bottom: 8px;

  background-color: ${({ theme, color, disabled }) =>
    disabled ? theme.colors.primary_light : color || theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.title : theme.colors.background};
`;
