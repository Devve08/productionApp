import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useContext } from "react";

import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import { Colors } from "../Styles/styles";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import SessionContext from "../context/SessionContext";

export default function DrawerContent(props) {
  const {
    actions: { Logout },
    isLoggedIn
  } = useContext(SessionContext);

  return (
    <View style={{ backgroundColor: '#d7af43', flex: 1 }}>
      <StatusBar style="dark" />
      <DrawerContentScrollView {...props}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
            
          }}
        >
          <Image
            source={require("../assets/images/1978.png")}
            style={{
              width: 170,
              height: 150,
              borderRadius:10,
              marginBottom: 10,
              resizeMode: 'contain'
            }}
          />
          <Text
            style={{ color: Colors.primary, fontSize: 16, fontWeight: "bold" }}
          ></Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
     {isLoggedIn?  <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={Logout} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="exit-outline" size={22} color={Colors.darkLight} />
            <Text
              style={{ marginLeft: 10, fontSize: 16, color: Colors.darkLight }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>: null}
    </View>
  );
}

const styles = StyleSheet.create({
  logoutSection: {
    paddingLeft: 40,
  },
});
