import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import {
  Container,
  IconWrapper,
  InputText,
  PasswordVisibleWrapper,
} from "./styles";

interface PasswordInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export function PasswordInput(props: PasswordInputProps) {
  const { iconName, ...rest } = props;
  const theme = useTheme();

  const [passwordVisible, setPasswordVisible] = useState(false);

  function handlePasswordVisibleChange() {
    setPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <IconWrapper>
        <Feather name={iconName} size={24} color={theme.colors.text} />
      </IconWrapper>

      <InputText {...rest} secureTextEntry={!passwordVisible} />

      <PasswordVisibleWrapper onPress={handlePasswordVisibleChange}>
        <Feather
          name={passwordVisible ? "eye-off" : "eye"}
          size={24}
          color={theme.colors.text}
        />
      </PasswordVisibleWrapper>
    </Container>
  );
}
