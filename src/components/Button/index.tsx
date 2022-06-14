import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button(props: ButtonProps) {
  const { title, color, ...rest } = props;

  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
