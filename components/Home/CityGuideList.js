import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import image from "../../assets/images/city.jpg";
import { RowSpaceContainer } from "../../Styles/styles";
import FlatlistComponent from "./FlatlistComponent";

const data = ["Restaurant 1", "Restaurant 2", "Restaurant 3", "Restaurant 4"];

export default function CityGuideList({ navigation }) {
  return (
    <View>
      <RowSpaceContainer>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
          City Guide
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("City Guide")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text>View all</Text>
          <Icon name="arrow-right-alt" size={22} />
        </TouchableOpacity>
      </RowSpaceContainer>
      <View style={{ height: 160, width: "100%" }}>
        <FlatList
          horizontal={true}
          style={{ width: "100%", height: "100%" }}
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <FlatlistComponent restaurant={true} image={image} title={item} />
          )}
        />
      </View>
    </View>
  );
}
