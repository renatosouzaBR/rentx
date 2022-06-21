import React from "react";
import { useWindowDimensions } from "react-native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo-bg.svg";
import DoneSvg from "../../assets/done.svg";
import { ConfirmButton } from "../../components/ConfirmButton";

import { Container, Content, Title, Subtitle, Footer } from "./styles";

export function SchedulingConfirm() {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return (
    <Container>
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
        <ConfirmButton title="OK" />
      </Footer>
    </Container>
  );
}
