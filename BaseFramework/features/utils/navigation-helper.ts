import React from 'react';
import {
  CommonActions,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';

//Navigation container reference
const NavigationRef: any = React.createRef();

//Navigate to a route
function navigate(name: string, params?: object): void {
  NavigationRef.current?.dispatch(CommonActions.navigate({ name, params }));
}

//Go back from current screen to previous
function goBack(): void {
  NavigationRef.current?.dispatch(CommonActions.goBack());
}

function openDrawer(): void {
  NavigationRef.current?.dispatch(DrawerActions.openDrawer());
}

//Navigate to a route
function closeDrawer(): void {
  NavigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

//Replace current screen with provided screen
function replace(name: string, params?: object) {
  NavigationRef.current?.dispatch(StackActions.replace({ name, params }));
}

function getState(): object | undefined {
  return NavigationRef?.current?.getState();
}

export const NavigationService = {
  NavigationRef,
  navigate,
  goBack,
  openDrawer,
  closeDrawer,
  replace,
  getState,
};
