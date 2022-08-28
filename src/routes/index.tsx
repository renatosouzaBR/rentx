import { NavigationContainer } from "@react-navigation/native";
import { LoadingCar } from "../components/LoadingCar";
import { useAuth } from "../hooks/auth";

import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user, loading } = useAuth();

  if (loading) return <LoadingCar />;

  return (
    <NavigationContainer>
      {user ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
