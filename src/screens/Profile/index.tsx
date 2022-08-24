import React, { useState } from "react";
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
  Content,
  Options,
  OptionButton,
  OptionTitle,
} from "./styles";

export function Profile() {
  const navigate = useNavigation();
  const theme = useTheme();

  const [option, setOption] = useState<"dataOption" | "passwordOption">(
    "dataOption"
  );

  function handleBack() {
    navigate.goBack();
  }

  function handleSignOut() {}

  function handleOptionChange(newOption: "dataOption" | "passwordOption") {
    setOption(newOption);
  }

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

      <Content>
        <Options>
          <OptionButton
            active={option === "dataOption"}
            onPress={() => handleOptionChange("dataOption")}
          >
            <OptionTitle active={option === "dataOption"}>Dados</OptionTitle>
          </OptionButton>

          <OptionButton
            active={option === "passwordOption"}
            onPress={() => handleOptionChange("passwordOption")}
          >
            <OptionTitle active={option === "passwordOption"}>
              Trocar senha
            </OptionTitle>
          </OptionButton>
        </Options>
      </Content>
    </Container>
  );
}
