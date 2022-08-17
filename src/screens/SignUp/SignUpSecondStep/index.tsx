import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as yup from "yup";

import { api } from "../../../services/api";
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

interface Params {
  user: { name: string; email: string; driverLicense: string };
}

export function SignUpSecondStep() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const { user } = route.params as Params;
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    try {
      const schema = yup.object().shape({
        passwordConfirm: yup
          .string()
          .required("Confirmação de senha é obrigatório")
          .oneOf(
            [yup.ref("password"), null],
            "As senhas não são iguais, verifique!"
          ),
        password: yup.string().required("Senha é obrigatório"),
      });

      await schema.validate({ password, passwordConfirm });

      await api.post("/users", {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      });

      navigation.navigate("Confirmation", {
        title: "Conta criada!",
        message: "",
        nextScreenRoute: "SignIn",
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Falha ao cadastrar",
          "Não foi possível realizar o cadastro, tente novamente!"
        );
      }
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
              <Bullet />
              <Bullet active />
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

              <PasswordInput
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
              <PasswordInput
                iconName="lock"
                placeholder="Repetir senha"
                onChangeText={setPasswordConfirm}
                value={passwordConfirm}
              />
            </Form>

            <Button
              title="Cadastrar"
              color={theme.colors.success}
              onPress={handleRegister}
            />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
