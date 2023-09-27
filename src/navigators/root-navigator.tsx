import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../constants/screens";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./reset-navigator";
import { AuthenticatedStack } from "./authenticated-stack";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.AUTHENTICATED_STACK} component={AuthenticatedStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
