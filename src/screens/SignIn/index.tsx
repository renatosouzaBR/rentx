import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import { Container, Footer, Header, SubTitle, Title, Form } from "./styles";

export function SignIn() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={theme.colors.background_light}
      />

      <Header>
        <Title>Estamos{"\n"}quase lá.</Title>
        <SubTitle>
          Faça seu login para começar{"\n"}uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input
          iconName="mail"
          placeholder="E-mail"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <PasswordInput iconName="lock" placeholder="Senha" />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          onPress={() => {}}
          light
          color={theme.colors.background}
          enabled={false}
          loading={false}
        />
      </Footer>
    </Container>
  );
}