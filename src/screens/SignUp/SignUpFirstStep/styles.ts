import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: 0 ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.background_light};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${RFValue(30)}px;
`;

export const Steps = styled.View`
  flex-direction: row;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.semiBold};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.title};

  margin-top: ${RFValue(60)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(25)}px;

  margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: ${RFValue(64)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo.semiBold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(24)}px;
`;
