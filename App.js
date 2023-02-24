import { useEffect, useRef, useState } from "react";
import "react-native-gesture-handler";
import SessionProvider from "./context/SessionProvider";

import RootStack from "./root/RootStack";
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'



export default function App() {

  
  return (
    <SessionProvider>
      <RootStack />
    </SessionProvider>
  );
}
