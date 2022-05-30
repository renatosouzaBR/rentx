import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled(BorderlessButton)`
  padding: ${RFValue(6)}px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
`;
