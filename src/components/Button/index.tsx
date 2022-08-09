import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    title,
    color,
    enabled = true,
    loading = false,
    light = false,
    ...rest
  } = props;

  return (
    <Container
      {...rest}
      color={color}
      enabled={enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
    >
      {loading ? (
        <ActivityIndicator size={24} color="#FFF" />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
