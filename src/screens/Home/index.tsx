import React, { useEffect, useState } from "react";
import { StatusBar, BackHandler } from "react-native";
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
import { useNetInfo } from "@react-native-community/netinfo";
import { synchronize } from "@nozbe/watermelondb/sync";

import { api } from "../../services/api";
import { database } from "../../database";
import { Car as ModelCar } from "../../database/model/car";

import { CarCard } from "../../components/CarCard";
import { LoadingCar } from "../../components/LoadingCar";
import { CarDTO } from "../../dtos/carDto";

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
  const [cars, setCars] = useState<ModelCar[]>([]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();

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
      positionX.value = withSpring(positionX.value);
      positionY.value = withSpring(positionY.value);
    },
  });

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleMyCars() {
    navigation.navigate("MyCars");
  }

  async function offlineSyncronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api.get(
          `cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`
        );
        const { changes, latestVersion } = response.data;
        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users;
        await api.post("users/sync", user);
      },
    });
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchCars() {
      try {
        const cars = await database.get<ModelCar>("cars").query().fetch();

        if (isMounted) {
          setCars(cars);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchCars();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  useEffect(() => {
    if (netInfo.isConnected) {
      offlineSyncronize();
    }
  }, [netInfo.isConnected]);

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
        <LoadingCar />
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
