import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";

import LogoSvg from "../../assets/logo-bg.svg";
import DoneSvg from "../../assets/done.svg";
import { ConfirmButton } from "../../components/ConfirmButton";

import { Container, Content, Title, Subtitle, Footer } from "./styles";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { width } = useWindowDimensions();

  const { title, message, nextScreenRoute } = route.params as Params;

  function handleHome() {
    navigation.navigate(nextScreenRoute as any);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.dark}
      />

      <LogoSvg width={width} height={RFValue(235)} color={theme.colors.shape} />

      <Content>
        <DoneSvg />
        <Title>{title}</Title>
        <Subtitle>{message}</Subtitle>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleHome} />
      </Footer>
    </Container>
  );
}
