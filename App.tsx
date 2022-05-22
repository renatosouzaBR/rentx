import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import { Home } from "./src/screens/Home";
import theme from "./src/global/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  async function prepare() {
    await SplashScreen.preventAutoHideAsync();
  }

  async function showApp() {
    await SplashScreen.hideAsync();
  }

  useEffect(() => {
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      showApp();
    }
  }, [fontsLoaded]);

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
