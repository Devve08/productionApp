import React, { useState, useEffect, useContext } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import SessionContext from "../context/SessionContext";
import * as FileSystem from 'expo-file-system';
import shorthash from "shorthash";


export default function ProjectFiles(props) {
  const { getListOfProjectFiles } = useContext(SessionContext);
  const [source, setSource] = useState(null)
  const img = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhuppyz.com%2Fwp-content%2Fuploads%2F2021%2F08%2FGoogle-Update-Link-Spam-2021.jpg&imgrefurl=https%3A%2F%2Fhuppyz.com%2Fgoogle-link-spam-update%2F&tbnid=dZzg9nWz7FUNjM&vet=12ahUKEwj3kMuC_e73AhXFQfEDHbC6BgcQMygRegUIARD4AQ..i&docid=uywJtsCD9EWHXM&w=5865&h=3672&q=google&ved=2ahUKEwj3kMuC_e73AhXFQfEDHbC6BgcQMygRegUIARD4AQ'
  const [projectFiles, setProjectFiles] = useState([]);
  let project_id = props.route.params.project_id;


  const imageInfo = async(uri) => {
    const name = shorthash.unique(uri)
    const path = `${FileSystem.cacheDirectory}${name}`
    const image = await FileSystem.getInfoAsync(path)
    console.log(name)
    // if(image.exists){
    //   setSource(image.uri)
    //   console.log("not new", source)
    // }
    // else{
      const newImage = await FileSystem.downloadAsync(uri, FileSystem.documentDirectory)
      
      setSource(newImage.uri)
      console.log("new", FileSystem.documentDirectory)
    // }
  }
  useEffect(async () => {
    let res = await getListOfProjectFiles(project_id);
    setProjectFiles(res.project_files_array);
    // console.log("w",res);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={{width:150, height: 150}} source={source}/>
      {projectFiles && (
        <FlatList
          keyExtractor={(item, index) => index}
          data={projectFiles}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=> imageInfo(img)} style={styles.btnProject}>
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
    paddingTop:20,
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
