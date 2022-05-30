import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: ${RFValue(36)}px ${RFValue(24)}px;
`;

export const BackButtonWrapper = styled.View`
  position: absolute;
  top: ${RFValue(21)}px;
  left: ${RFValue(24)}px;
`;
