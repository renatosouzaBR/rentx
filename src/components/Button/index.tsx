import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
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
      color={color}
      enabled={enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size={24} color="#FFF" />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
