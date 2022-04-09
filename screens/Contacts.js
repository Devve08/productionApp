import React, { useEffect, useContext, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import SessionContext from "../context/SessionContext";

export default function Contacts(props) {
  let project_id = props.route.params.project_id;
  const { getListOfContacts } = useContext(SessionContext);
  const { isLoading, setIsLoading } = useState(false);
  const { error, setError } = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(async () => {
    let res = await getListOfContacts(project_id);
    setContacts(res.contact_array);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Contacts</Text>
      <View style={{ height: 250 }}>
        <FlatList
          keyExtractor={(item, index) => index}
          data={contacts}
          renderItem={({ item }) => (
            <View style={styles.btnProject}>
              <View>
                <Text style={styles.titleText}>{item.pc_first_name}</Text>
                <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
                  {item.pc_last_name}
                </Text>
              </View>
              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`mailto:${item.pc_email}`)}
                  style={{ marginRight: 20 }}
                >
                  <Icon name="email" size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:${item.pc_mobile}`)}
                >
                  <Icon name="phone" size={23} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnProject: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
    height: 60,
    marginHorizontal: 25,
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
  title: {
    borderTopColor: "#000000",
    borderBottomColor: "#000000",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    textAlign: "center",
    width: "100%",
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
