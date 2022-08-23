import React from "react";
import styled from "styled-components/native";
import {
  BorderlessButton,
  BorderlessButtonProps,
  RectButton,
} from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps {
  children: React.ReactNode;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_light};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(227)}px;
  align-items: center;

  padding: 0 ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${RFValue(60)}px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.semiBold};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.background};
`;

export const SignOutButton = styled(BorderlessButton)<ButtonProps>``;

export const PhotoWrapper = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;

  margin-top: ${RFValue(50)}px;
`;

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)<ButtonProps>`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 1px;
  bottom: 1px;
`;
