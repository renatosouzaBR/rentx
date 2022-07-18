import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import LogoSvg from "../../assets/logo-bg.svg";
import DoneSvg from "../../assets/done.svg";
import { ConfirmButton } from "../../components/ConfirmButton";

import { Container, Content, Title, Subtitle, Footer } from "./styles";

export function SchedulingConfirm() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  function handleHome() {
    navigation.navigate("Home");
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
        <Title>Carro alugado!</Title>
        <Subtitle>
          Agora você só precisa ir{"\n"}
          até a concessionária da RENTX{"\n"}
          pegar o seu automóvel.
        </Subtitle>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleHome} />
      </Footer>
    </Container>
  );
}
