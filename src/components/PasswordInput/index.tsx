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
  value?: string;
}

export function PasswordInput(props: PasswordInputProps) {
  const { iconName, value, ...rest } = props;
  const theme = useTheme();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVisibleChange() {
    setPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container isFocused={isFocused}>
      <IconWrapper>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.primary : theme.colors.text
          }
        />
      </IconWrapper>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={!passwordVisible}
        {...rest}
      />

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
