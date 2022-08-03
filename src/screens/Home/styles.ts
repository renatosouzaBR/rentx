import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import LogoSvg from "../../assets/logo.svg";
import { CarDTO } from "../../dtos/carDto";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_light};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.dark};

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 ${RFValue(24)}px ${RFValue(32)}px ${RFValue(24)}px;
`;

export const LogoImage = styled(LogoSvg).attrs({
  width: RFValue(108),
  height: RFValue(12),
})``;

export const TotalCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CarListSeparator = styled.View`
  width: 100%;
  height: ${RFValue(16)}px;
  background-color: transparent;
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 16,
  },
  ItemSeparatorComponent: CarListSeparator,
})``;

export const MyCarsButton = styled(
  Animated.createAnimatedComponent(RectButton)
)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(30)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  position: absolute;
  bottom: 13px;
  right: 22px;
`;
