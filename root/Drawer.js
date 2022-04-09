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
  } = useContext(SessionContext);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <DrawerContentScrollView {...props}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 40,
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{
              width: 120,
              height: 120,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{ color: Colors.primary, fontSize: 16, fontWeight: "bold" }}
          ></Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutSection: {
    paddingLeft: 40,
  },
});
