import React, { useState, useEffect, useContext } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SessionContext from "../context/SessionContext";

export default function ProjectFiles(props) {
  const { getListOfProjectFiles } = useContext(SessionContext);
  const [projectFiles, setProjectFiles] = useState([]);
  let project_id = props.route.params.project_id;
  useEffect(async () => {
    console.log("hello");
    let res = await getListOfProjectFiles(project_id);
    setProjectFiles(res.project_files_array);
    console.log(res);
  }, []);
  return (
    <View style={styles.container}>
      {projectFiles && (
        <FlatList
          keyExtractor={(item, index) => index}
          data={projectFiles}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.btnProject}>
              <View>
                <Text style={styles.titleText}>{item.pf_file_label}</Text>
                <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
                  {item.pf_creation_date ? item.pf_creation_date : null}
                </Text>
              </View>
              <View>
                <Fontisto name="download" size={30} />
              </View>
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
    paddingHorizontal: 10 ,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
