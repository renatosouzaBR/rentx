import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { Confirmation } from "../screens/Confirmation";
import { SchedulingDetails } from "../screens/SchedulingDetails";

import { Car } from "../database/model/car";

type AppStackRoutesParams = {
  Home: undefined;
  CarDetails: { car: Car };
  Scheduling: { car: Car };
  SchedulingDetails: undefined;
  Confirmation: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackRoutesParams {}
  }
}

const { Navigator, Screen } = createStackNavigator<AppStackRoutesParams>();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
