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
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";

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

export function SignUpSecondStep() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
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
              <FormTitle>2. Senha</FormTitle>

              <PasswordInput iconName="lock" placeholder="Senha" />
              <PasswordInput iconName="lock" placeholder="Repetir senha" />
            </Form>

            <Button title="Cadastrar" color={theme.colors.success} />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
