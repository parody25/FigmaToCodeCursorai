/**
 * Navigator: Auth Section
 */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SignUpPage from "../krown-screen/SignUpPage.js";
import ListScreen from "../krown-screen/ListScreen";
import SignIn from "../screens/signInGenAi";
//import SignIn from "../screens/SignIn";
import List1 from "../screens/List1";
import Feed from "../screens/Feed";
import FeedScreen from "../screens/FeedScreen";
import MobileAppHeader from "../components/MobileAppHeader";
import MobileAppHeader1 from "../components/MobileAppHeader1";
import MobileAppHeader2 from "../components/MobileAppHeader2";
import TabBarItem from "../components/TabBarItem";
import TabBarItem1 from "../components/TabBarItem1";
import TabBarItem2 from "../components/TabBarItem2";
import MobileAppHeader4 from "../components/MobileAppHeader4";
import TabBarItem3 from "../components/TabBarItem3";
import TabBarItem4 from "../components/TabBarItem4";
import TabBarItem5 from "../components/TabBarItem5";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <TabBarItem3 />,
    <TabBarItem4 />,
    <TabBarItem5 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <TabBarItem1 />,
    <TabBarItem2 />,
    <TabBarItem />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              overflow: "hidden",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 7,
              paddingVertical: 0,
              height: 49,
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="List1"
        component={List1}
        options={(props: any) => ({
          headerShown: true,
          header: () => <MobileAppHeader1 />,
        })}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={(props: any) => ({
          headerShown: true,
          header: () => <MobileAppHeader2 />,
        })}
      />
      <Tab.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={(props: any) => ({
          headerShown: true,
          header: () => <MobileAppHeader4 />,
        })}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

const AuthSection: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={(props: any) => ({
          headerShown: false,
          header: () => <MobileAppHeader />,
        })}
      />
      <Stack.Screen
        name="List1"
        component={List1}
        options={(props: any) => ({
          headerShown: false,
          header: () => <MobileAppHeader />,
        })}
      />
      <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
    </Stack.Navigator>
  );
};

export { AuthSection };
