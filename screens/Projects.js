import React, { useContext,  useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SessionContext from "../context/SessionContext";

export default function Projects({ navigation }) {
  const { projectsList, getProjectsList } = useContext(SessionContext);
  useEffect(() => {
    getProjectsList()
  }, []);
  return (
    <View style={styles.container}>
      {projectsList && (
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
    marginTop: 10,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  titleText: {
    fontSize: 17,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
