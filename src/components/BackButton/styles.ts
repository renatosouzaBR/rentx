import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";

interface IconProps {
  color?: string;
}

export const Container = styled(BorderlessButton)`
  padding: ${RFValue(6)}px;
`;

export const Icon = styled(Ionicons)<IconProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, color }) => color || theme.colors.text};
`;
