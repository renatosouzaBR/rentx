import { createStackNavigator } from "@react-navigation/stack";
import { CarDetails } from "../screens/CarDetails";

import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
    </Navigator>
  );
}
