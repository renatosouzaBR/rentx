import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";

import { CarCard } from "../../components/CarCard";
import { Loading } from "../../components/Loading";
import { CarDTO } from "../../dtos/carDto";
import { api } from "../../services/api";
import {
  CarList,
  Container,
  Header,
  LogoImage,
  TotalCar,
  MyCarsButton,
} from "./styles";

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: positionX.value },
      { translateY: positionY.value },
    ],
  }));

  const onGestureHandler = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd(event) {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  async function fetchCars() {
    try {
      const response = await api.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.dark}
      />

      <Header>
        <LogoImage />
        <TotalCar>Total de {cars.length} carros</TotalCar>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CarCard data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureHandler}>
        <Animated.View style={myCarsButtonAnimatedStyle}>
          <MyCarsButton onPress={handleMyCars}>
            <Ionicons name="ios-car-sport" size={32} color="#FFF" />
          </MyCarsButton>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}
