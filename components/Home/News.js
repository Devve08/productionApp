import React from "react";
import { Text, View } from "react-native";

export default function News() {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: 20,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
        News
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
        News title
      </Text>
      <Text style={{ fontSize: 15, marginBottom: 5 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </Text>
    </View>
  );
}
