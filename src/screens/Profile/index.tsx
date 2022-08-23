import React from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components/BackButton";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  SignOutButton,
  PhotoWrapper,
  Photo,
  PhotoButton,
} from "./styles";

export function Profile() {
  const navigate = useNavigation();
  const theme = useTheme();

  function handleBack() {
    navigate.goBack();
  }

  function handleSignOut() {}

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={theme.colors.background} onPress={handleBack} />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <SignOutButton onPress={handleSignOut}>
            <Feather name="power" size={24} color={theme.colors.text_light} />
          </SignOutButton>
        </HeaderTop>

        <PhotoWrapper>
          <Photo source={{ uri: "https://github.com/renatosouzaBR.png" }} />
          <PhotoButton onPress={() => {}}>
            <Feather name="camera" size={24} color={theme.colors.background} />
          </PhotoButton>
        </PhotoWrapper>
      </Header>
    </Container>
  );
}
