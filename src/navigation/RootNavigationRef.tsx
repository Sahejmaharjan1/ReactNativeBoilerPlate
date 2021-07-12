import {NavigationContainerRef} from '@react-navigation/core';
import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const isReadyRef: React.MutableRefObject<boolean | null> =
  React.createRef();

export const navigationRef: React.RefObject<NavigationContainerRef> =
  React.createRef();

export function navigate(name: String, params: Object) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    //@ts-ignore
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function replace(name: string, params: Object = {}) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    //@ts-ignore
    // console.log('replace', name, params);

    navigationRef.current?.dispatch(StackActions.replace(name, params));
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    //@ts-ignore
    navigationRef.current.goBack();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
export function stackPop(index: number = 1) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    //@ts-ignore
    navigationRef.current?.dispatch(StackActions.pop(index));

    // navigationRef.current?.dispatch(StackActions.pop(index));
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
export function currentRoute() {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    //@ts-ignore
    return navigationRef.current.getCurrentRoute();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
