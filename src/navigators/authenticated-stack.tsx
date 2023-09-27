import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationStackBottomBar from "./navigation-stack";
import { Screens } from "../constants/screens";
import Menu from "../screens/menu/menu";
import Product from "../screens/product/product";

const Athenticated = createNativeStackNavigator();

export const AuthenticatedStack = () => {
  return (
    <Athenticated.Navigator
      initialRouteName={Screens.HOME_STACK}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Athenticated.Screen name={Screens.HOME_STACK} component={NavigationStackBottomBar} />
      <Athenticated.Screen name={Screens.MENU} component={Menu} />
      <Athenticated.Screen name={Screens.PRODUCT} component={Product} />
    </Athenticated.Navigator>
  );
};
