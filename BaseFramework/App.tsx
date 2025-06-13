import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "./features/redux/index";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigator } from "./features/navigator";

const Tab = createBottomTabNavigator();

const { store, persistor } = configureStore();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {(restored: boolean) => (
            <>{hideSplashScreen ? <Navigator /> : null}</>
          )}
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;
