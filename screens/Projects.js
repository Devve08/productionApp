import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState, useEffect } from "react";
import defaultImage from "../assets/images/project.png"
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  ImageBackground
} from "react-native";
import SessionContext from "../context/SessionContext";
import { Colors } from "../Styles/styles";

export default function Projects({ navigation }) {
  const { projectsList, getProjectsList } = useContext(SessionContext);
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
  }
  useEffect(() => {
    getProjectsList()
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.primary, marginRight: 5 }}>Change view</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={{paddingVertical:20}}>

      </View>

      {!isEnabled ? projectsList && (
        <FlatList
          keyExtractor={(item, index) => index}
          data={projectsList.projects_array}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Calendar", { pp_id: item.pp_id })
              }
              style={styles.btnProject}
            >
              <Text style={styles.titleText}>{item.pp_project_label}</Text>
              <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
                {item.pp_project_description}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <FlatList
          key={"_"}
          keyExtractor={(item, _index) => _index}
          numColumns={2}
          data={projectsList.projects_array}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Calendar", { pp_id: item.pp_id })
              }
              style={styles.thumbnail}
            >
              <ImageBackground source={item.image ? item.image : defaultImage} style={{ width: "100%", height: "100%" }}>
                <LinearGradient
                  colors={["#00000000", "#000011"]}
                  style={styles.linear}
                >
                  <View
                    style={styles.textView}
                  >
                    <View>
                      <Text
                        style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                      >
                        {item.pp_project_label}
                      </Text>

                    </View>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          )} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btnProject: {
    borderTopColor: "black",
    borderTopWidth: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    height: 60,
    justifyContent: "center",
  },
  container: {
    paddingTop: 20,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  titleText: {
    fontSize: 17,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
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
  },
  thumbnail: {
    width: 180,
    height: 200,
    paddingHorizontal: 20
  }
});
