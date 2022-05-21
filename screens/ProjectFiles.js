import React, { useState, useEffect, useContext } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking
} from "react-native";
import SessionContext from "../context/SessionContext";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library';



export default function ProjectFiles(props) {
  const { getListOfProjectFiles } = useContext(SessionContext);
  const [projectFiles, setProjectFiles] = useState([]);
  const [permission, setPermission] = useState(null)
  let project_id = props.route.params.project_id;

  

 const downloadFile = async() => {
 
 
  
  if (permission != 'granted') {
    console.log('eh')
  }
  else{
    const uri = 'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
    const filename="istockphoto-517188688-612x612.jpg"
    const fileUri = `${FileSystem.documentDirectory}`;
    const downloadedFile = FileSystem.downloadAsync(uri, fileUri)
    .then(res=> console.log(res))
    .catch(err => console.log(err))
    
    const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri + filename);
    
    // const album = await MediaLibrary.getAlbumAsync('Downloads');
    // console.log('hello', asset)
    // if (album == null) {
    //   await MediaLibrary.createAlbumAsync('Download', asset, false);
    // } else {
    //   await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
    // }

  }
 }
  
  
  
  useEffect(async () => {
    // const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
    // const {stat} = await ImagePicker.requestCameraPermissionsAsync()
    
    // setPermission(status)
    let res = await getListOfProjectFiles(project_id);
    setProjectFiles(res.project_files_array);
  }, []);

  const openPDF = (link) => {
    try {
      Linking.openURL(link)
    } catch (error) {
      console.log(error.message)
    }
     
  }
  return (
    <View style={styles.container}>
      {projectFiles && (
        <FlatList
          keyExtractor={(item, index) => index}
          data={projectFiles}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>openPDF(item.project_img_logo)} style={styles.btnProject}>
              <View >
                <Text style={styles.titleText}>{item.pf_file_label}</Text>
                
                {item.pf_creation_date ? (<Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
                  {item.pf_creation_date ? item.pf_creation_date : null}
                </Text>) : null }
              </View>
              <View >
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
    height:'auto',
    width:320,
    paddingVertical:10,
   flexDirection: "row",
   justifyContent: "space-between",
    alignItems: "center"
  },
  container: {
    flex: 1,
    paddingTop:20,
    paddingHorizontal:10,
    backgroundColor: "white",
    alignItems: "center"
  },
 titleText: {
   width: 250,
   fontSize: 16
 }
});
