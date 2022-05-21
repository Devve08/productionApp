import React, { useEffect, useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import image from "../../assets/images/project.png";
import SessionContext from "../../context/SessionContext";
import { RowSpaceContainer } from "../../Styles/styles";
import FlatlistComponent from "./FlatlistComponent";

const data = ["Title 1", "Title 2", "Title 3", "Title 4"];

export default function RecentWork({ navigation }) {
  const { projectsList, getProjectsList } = useContext(SessionContext);

  useEffect(() => {
    getProjectsList();
  }, []);

  return (
    <View>
      <RowSpaceContainer>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
          Recent Work
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Projects")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text>View all</Text>
          <Icon name="arrow-right-alt" size={22} />
        </TouchableOpacity>
      </RowSpaceContainer>
      <View style={styles.flatListView}>
        {projectsList && (
          <FlatList
            horizontal={true}
            style={{ width: "100%", height: "100%" }}
            data={projectsList.projects_array}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() =>
                navigation.navigate("Calendar", { pp_id: item.pp_id })
              }>
                {console.log("klsj", item.project_img_logo)}
                <FlatlistComponent title={item.pp_project_label} image={item.project_img_logo}  />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListView: {
    height: 160,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
});
