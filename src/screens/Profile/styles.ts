import React from "react";
import styled, { css } from "styled-components/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps {
  children: React.ReactNode;
}

interface OptionProps extends ButtonProps {
  active: boolean;
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

export const Content = styled.View`
  padding: 0 ${RFValue(24)}px;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 122px;
  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;
`;

export const OptionButton = styled.TouchableOpacity<OptionProps>`
  padding: 0 0 14px 0;

  ${({ theme, active }) =>
    active &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary};
    `}
`;

export const OptionTitle = styled.Text<OptionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme, active }) =>
    active ? theme.fonts.archivo.semiBold : theme.fonts.archivo.regular};
  color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.text_light};
`;
