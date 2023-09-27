/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import ArrowLeftIcon from "../../assets/svg/arrow-left-icon.svg";

function AppLayout({ children, bodyStyle, headerTitle, onBackPress }) {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
        <StatusBar backgroundColor="#F9F9F9" barStyle="dark-content" />
        <View style={styles.header}>
          {onBackPress ? (
            <TouchableOpacity onPress={onBackPress} style={styles.headerArrowLeft}>
              <ArrowLeftIcon style={styles.headerArrowLeftIcon} />
            </TouchableOpacity>
          ) : (
            <View style={styles.headerArrowLeft2} />
          )}
          <Text style={styles.headerTitleText}>{headerTitle}</Text>
          <View style={styles.headerArrowLeft2} />
        </View>

        <ScrollView contentContainerStyle={[styles.body, bodyStyle]}>{children}</ScrollView>
      </SafeAreaView>
    </>
  );
}

export default AppLayout;
