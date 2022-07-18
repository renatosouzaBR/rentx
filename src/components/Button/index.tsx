import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  const { title, color, disabled, ...rest } = props;

  return (
    <Container
      {...rest}
      color={color}
      disabled={disabled}
      onPress={disabled ? () => {} : rest.onPress}
    >
      <Title>{title}</Title>
    </Container>
  );
}
