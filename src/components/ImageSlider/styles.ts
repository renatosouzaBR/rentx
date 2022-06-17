import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
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
  width: 100%;
`;

export const CarImage = styled.Image`
  height: ${RFValue(132)}px;
`;
