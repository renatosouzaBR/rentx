import React from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

import {
  Container,
  Header,
  Steps,
  Content,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from "./styles";

export function SignUpFirstStep() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleSecondStep() {
    navigation.navigate("SignUpSecondStep");
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor={theme.colors.background_light}
          />

          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Content>
            <Title>Crie sua{"\n"}conta</Title>
            <SubTitle>
              Faça seu cadastro de{"\n"}
              forma rápida e fácil.
            </SubTitle>

            <Form>
              <FormTitle>1. Dados</FormTitle>

              <Input iconName="user" placeholder="Nome" />
              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                iconName="credit-card"
                placeholder="CNH"
                keyboardType="numeric"
              />
            </Form>

            <Button title="Próximo" onPress={handleSecondStep} />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
