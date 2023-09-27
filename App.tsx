/* eslint-disable @typescript-eslint/ban-types */
import "react-native-reanimated";
import "react-native-gesture-handler";
import React from "react";
import SplashScreen from "react-native-splash-screen";
import { RootNavigator } from "./src/navigators/root-navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { listenOrientationChange, removeOrientationListener } from "react-native-responsive-screen";

class App extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      orientation: "portrait",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    listenOrientationChange(this);
  }

  componentWillUnmount() {
    removeOrientationListener();
  }

  render() {
    return (
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    );
  }
}

export default App;
