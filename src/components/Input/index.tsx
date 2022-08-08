import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container, IconWrapper, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export function Input(props: InputProps) {
  const { iconName, ...rest } = props;
  const theme = useTheme();

  return (
    <Container>
      <IconWrapper>
        <Feather name={iconName} size={24} color={theme.colors.text} />
      </IconWrapper>

      <InputText {...rest} />
    </Container>
  );
}
