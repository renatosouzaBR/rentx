import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container, Icon } from "./styles";

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton(props: BackButtonProps) {
  const { color, ...rest } = props;

  return (
    <Container {...rest}>
      <Icon name="chevron-back" color={color} />
    </Container>
  );
}
