import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
} from "react-native-reanimated";

import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";

import { Container } from "./styles";

export function Splash() {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
    transform: [
      { translateX: interpolate(splashAnimation.value, [0, 50], [0, -50]) },
    ],
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 50], [0, 1]),
    transform: [
      { translateX: interpolate(splashAnimation.value, [0, 50], [-50, 0]) },
    ],
  }));

  function startApp() {
    navigation.navigate("Home");
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 2000 }, () => {
      "worklet";
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <Animated.View style={[{ position: "absolute" }, brandStyle]}>
        <BrandSvg width={275} />
      </Animated.View>

      <Animated.View style={[{ position: "absolute" }, logoStyle]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
