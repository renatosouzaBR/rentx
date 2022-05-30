import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container, Icon } from "./styles";

interface BackButtonProps extends BorderlessButtonProps {}

export function BackButton(props: BackButtonProps) {
  return (
    <Container {...props}>
      <Icon name="chevron-back" />
    </Container>
  );
}
