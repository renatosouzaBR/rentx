import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  function handleBack() {
    navigation.goBack();
  }

  async function handleSecondStep() {
    try {
      const schema = yup.object().shape({
        driverLicense: yup.string().required("CNH é obrigatória"),
        email: yup
          .string()
          .required("E-mail é obrigatório")
          .email("E-mail inválido"),
        name: yup.string().required("Nome é obrigatório"),
      });

      const user = { name, email, driverLicense };
      await schema.validate(user);
      navigation.navigate("SignUpSecondStep", { user });
    } catch (error) {
      if (error instanceof yup.ValidationError)
        Alert.alert("Opa", error.message);
    }
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

              <Input
                iconName="user"
                placeholder="Nome"
                onChangeText={setName}
                value={name}
              />
              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setEmail}
                value={email}
              />
              <Input
                iconName="credit-card"
                placeholder="CNH"
                keyboardType="numeric"
                onChangeText={setDriverLicense}
                value={driverLicense}
              />
            </Form>

            <Button title="Próximo" onPress={handleSecondStep} />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
