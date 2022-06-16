import React from 'react'
import Modal from 'react-native-modal'
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native'

export default function HotelInfoModal({modalOpen, closeModal, item}) {

  const openPDF = (link) => {
    try {
      Linking.openURL(link)
    } catch (error) {
      console.log(error.message)
    }
     
  }
  return (
    <Modal
    isVisible={modalOpen}
    onBackdropPress={closeModal}
    style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
    >
      <ScrollView>
        <View style={styles.container}>
            <Image style={{width: 150, height: 150, marginBottom: 20}} source={{uri: item.hotel_profile}} />
            {item.h_hotel_name && <Text style={styles.hotelName}>{item.h_hotel_name}</Text>} 
            {item.h_hotel_city && <Text style={styles.city}>{item.h_hotel_city}</Text>}
            {item.h_hotel_description && <Text style={styles.description}>{item.h_hotel_description}</Text>}
            {item.h_hotel_email && <Text style={styles.email}>{item.h_hotel_email}</Text>}
            {item.h_hotel_phone && <Text style={styles.email}>{item.h_hotel_phone}</Text>}
            {item.h_hotel_website && <Text onPress={()=>openPDF(item.h_hotel_website)} style={styles.website}>{item.h_hotel_website}</Text>}
            {item.h_hotel_address && <Text onPress={()=>openPDF(item.h_hotel_address)} style={styles.address}>{item.h_hotel_address}</Text>}
        </View>
        </ScrollView>
    </Modal>
  )
}


const styles = StyleSheet.create({
  description:{fontSize: 16, marginBottom: 40, paddingHorizontal:20, textAlign:'center'},
  email:{fontSize: 16, marginBottom: 5, paddingHorizontal:10, textAlign:'center'},
  website:{fontSize: 16, paddingHorizontal:10, textAlign:'center', textDecorationLine:'underline'},
  address: {fontSize: 16, fontWeight: 'bold', paddingHorizontal:10, textAlign:'center', textDecorationLine:'underline'},
  hotelName: {fontSize: 16, fontWeight: 'bold', marginBottom: 20, paddingHorizontal:10, textAlign:'center'},
  city:{fontSize: 18, fontWeight: 'bold', marginBottom: 20, paddingHorizontal:10, textAlign:'center'},
  container: {width: "100%", height: 600, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}


})