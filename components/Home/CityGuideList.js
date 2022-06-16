import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import image from "../../assets/images/city.jpg";
import SessionContext from "../../context/SessionContext";
import { RowSpaceContainer } from "../../Styles/styles";
import FlatlistComponent from "./FlatlistComponent";

const data = ["Restaurant 1", "Restaurant 2", "Restaurant 3", "Restaurant 4"];

export default function CityGuideList({ navigation }) {
  const [categoryList, setCategories] = useState([])
  const { getCategoriesList, getListPlaces } = useContext(SessionContext);

  const getCatInfo = async (id, hotelName) => {
    let res = await getCategoriesList(id)
    navigation.navigate('SubCategories', {subCategories: res.categories_array, hotelName})
  }
  
  useEffect(async()=>{
    const res = await getCategoriesList(0)
    setCategories(res.categories_array)
  },[])
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
      <View style={{ height: 160, width: "100%", marginBottom: 20 }}>
        <FlatList
          horizontal={true}
          style={{ width: "100%", height: "100%"}}
          data={categoryList}
          keyExtractor={(item, _index) => _index}
          renderItem={({ item, index }) => (
            <FlatlistComponent onPress={()=>getCatInfo(item.pv_id, item.pv_category_title)} image={item.pv_profile} restaurant={true}  title={item.pv_category_title} />
          )}
        />
      </View>
    </View>
  );
}
