import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNetInfo } from "@react-native-community/netinfo";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { api } from "../../services/api";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { CarDTO } from "../../dtos/carDto";
import { Car as ModelCar } from "../../database/model/car";

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
  OfflineText,
} from "./styles";

interface Params {
  car: ModelCar;
}

export function CarDetails() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const netInfo = useNetInfo();

  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);

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

  async function fetchCarUpdated() {
    const { data } = await api.get(`cars/${car.id}`);
    setCarUpdated(data);
  }

  useEffect(() => {
    if (netInfo.isConnected) {
      fetchCarUpdated();
    }
  }, [netInfo.isConnected]);

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
            <ImageSlider
              imagesURL={
                !!carUpdated.photos
                  ? carUpdated.photos
                  : [{ id: car.id, photo: car.thumbnail }]
              }
            />
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
            <Period>{car.period}</Period>
            <Price>R$ {netInfo.isConnected ? carUpdated.price : "..."}</Price>
          </Rent>
        </Details>

        {carUpdated?.accessories && (
          <Accessories>
            {carUpdated.accessories.map((item) => (
              <Accessory
                name={item.name}
                icon={getAccessoryIcon(item.type)}
                key={item.name}
              />
            ))}
          </Accessories>
        )}

        <About>{car.about}</About>
      </Animated.ScrollView>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleScheduling}
          enabled={!!netInfo.isConnected}
        />

        {!netInfo.isConnected && (
          <OfflineText>
            Você está offline. Conecte-se para ver mais detalhes e alugar seu
            carro!
          </OfflineText>
        )}
      </Footer>
    </Container>
  );
}
