import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


export default function FlatlistComponent({ title, image, restaurant }) {
  return (
    <View style={{ width: 200, height: 150, marginRight: 10, marginTop: 5 }}>
      <ImageBackground source={{uri:image}} style={{ width: "100%", height: "100%" }}>
        <LinearGradient
          colors={["#00000000", "#000011"]}
          style={styles.linear}
        >
          <View
            style={styles.textView}
          >
            {restaurant ? (
              <Icon
                name="local-restaurant"
                color={"black"}
                style={styles.icon}
                size={25}
              />
            ) : null}
            <View>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                {title}
              </Text>
              <Text style={{ color: "white" }}>{title}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  linear: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 3,
    marginHorizontal: 5,
  },
  textView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 10,
  }
})