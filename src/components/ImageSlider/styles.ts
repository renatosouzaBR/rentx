import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: ${RFValue(6)}px;
  height: ${RFValue(6)}px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.text_light};
  margin-left: ${RFValue(8)}px;
  border-radius: ${RFValue(3)}px;
`;

export const CarWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${RFValue(132)}px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  height: ${RFValue(132)}px;
  width: ${RFValue(280)}px;
`;
