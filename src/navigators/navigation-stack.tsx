import React from "react";
import { Text, StyleSheet, Platform, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens } from "../constants/screens";
import HomeIcon from "../assets/svg/home-icon.svg";
import ActiveHomeIcon from "../assets/svg/home-icon-active.svg";
import MenuIcon from "../assets/svg/menu-icon.svg";
import ActiveMenuIcon from "../assets/svg/menu-icon-active.svg";
import CartIcon from "../assets/svg/cart-icon.svg";
import ActiveCartIcon from "../assets/svg/cart-icon-active.svg";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../constants/theme";
import Menu from "../screens/menu/menu";
import Images from "../assets/image";
import Cart from "../screens/cart/cart";

const Navigations = createBottomTabNavigator();
const EmptyScreen = () => {
  return null;
};
const styles = StyleSheet.create({
  icon: {
    width: wp("6.15%"),
    height: hp("2.84%"),
  },
  text: {
    fontSize: RFValue(14),
    marginTop: hp("1.83%"),
    marginBottom: hp("-0.83%"),
    fontFamily: Theme.fonts.PoppinsRegular,
    color: Theme.colors.tobamsFontGrey,
  },
  textActive: {
    fontSize: RFValue(14),
    marginTop: hp("1.83%"),
    marginBottom: hp("-0.83%"),
    fontFamily: Theme.fonts.PoppinsRegular,
    color: Theme.colors.tobamsRed,
  },
});

function NavigationStack() {
  return (
    <Navigations.Navigator
      initialRouteName={Screens.MENU}
      screenOptions={() => ({
        headerShown: false,
        animation: "slidSe_from_right",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              marginTop: hp("-19.29%"),
              height: hp("13.29%"),
              flexDirection: "row",
              alignItems: "center",

              paddingTop: hp("1.29%"),
              paddingHorizontal: wp("5.67%"),
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderWidth: 1,
              borderTopWidth: 1,
              borderColor: "#E1E5E9",
              backgroundColor: Theme.colors.tobamsBackground,
            },
            android: {
              marginTop: hp("-5.29%"),
              height: hp("8.29%"),
              flexDirection: "row",
              alignItems: "center",

              paddingTop: hp("1.29%"),
              paddingHorizontal: wp("5.67%"),
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              borderWidth: 1,
              borderColor: Theme.colors.tobamsGrey,
            },
          }),
        },
      })}
    >
      <Navigations.Screen
        name={Screens.HOME}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? <HomeIcon style={styles.icon} /> : <ActiveHomeIcon style={styles.icon} />,
          tabBarLabel: ({ focused }) =>
            !focused ? <Text style={styles.text}>Home</Text> : <Text style={styles.textActive}>Home</Text>,
        }}
      />
      <Navigations.Screen
        name={Screens.MENU}
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? <MenuIcon style={styles.icon} /> : <ActiveMenuIcon style={styles.icon} />,
          tabBarLabel: ({ focused }) =>
            !focused ? <Text style={styles.text}>Menu</Text> : <Text style={styles.textActive}>Menu</Text>,
        }}
      />
      <Navigations.Screen
        name={Screens.CART}
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? <CartIcon style={styles.icon} /> : <ActiveCartIcon style={styles.icon} />,
          tabBarLabel: ({ focused }) =>
            !focused ? <Text style={styles.text}>Cart</Text> : <Text style={styles.textActive}>Cart</Text>,
        }}
      />
      <Navigations.Screen
        name={Screens.ACCOUNT}
        component={EmptyScreen}
        options={{
          tabBarIcon: () => <Image source={Images.avatar} style={styles.icon} />,
          tabBarLabel: ({ focused }) =>
            !focused ? <Text style={styles.text}>Account</Text> : <Text style={styles.textActive}>Account</Text>,
        }}
      />
    </Navigations.Navigator>
  );
}
export default NavigationStack;
