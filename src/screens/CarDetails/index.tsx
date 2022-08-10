import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { CarDTO } from "../../dtos/carDto";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import {
  BackButtonWrapper,
  Container,
  Header,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 200], [300, 120], Extrapolate.CLAMP),
  }));

  const imageCarsAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 140], [1, 0], Extrapolate.CLAMP),
  }));

  function handleBack() {
    navigation.goBack();
  }

  function handleScheduling() {
    navigation.navigate("Scheduling", { car });
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={theme.colors.background}
      />

      <Animated.View style={[headerAnimatedStyle]}>
        <Header>
          <BackButtonWrapper>
            <BackButton onPress={handleBack} />
          </BackButtonWrapper>

          <Animated.View style={imageCarsAnimatedStyle}>
            <ImageSlider imagesURL={car.photos} />
          </Animated.View>
        </Header>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{ padding: RFValue(24) }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((item) => (
            <Accessory
              name={item.name}
              icon={getAccessoryIcon(item.type)}
              key={item.name}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Animated.ScrollView>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleScheduling}
        />
      </Footer>
    </Container>
  );
}
