import React from 'react'
import Modal from 'react-native-modal'
import { View, Text, Image } from 'react-native'

export default function HotelInfoModal({modalOpen, closeModal, item}) {
  return (
    <Modal
    isVisible={modalOpen}
    onBackdropPress={closeModal}
    style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
    >
        <View style={{width: "100%", height: 600, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Image style={{width: 150, height: 150, marginBottom: 20}} source={{uri: item.hotel_profile}} />
            {item.h_hotel_name && <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 20}}>{item.h_hotel_name}</Text>} 
            {item.h_hotel_city && <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>{item.h_hotel_city}</Text>}
            {item.h_hotel_address && <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.h_hotel_address}</Text>}
            {item.h_hotel_description && <Text style={{fontSize: 16, marginBottom: 40}}>{item.h_hotel_description}</Text>}
            {item.h_hotel_email && <Text style={{fontSize: 16, marginBottom: 5}}>{item.h_hotel_email}</Text>}
            {item.h_hotel_phone && <Text style={{fontSize: 16, marginBottom: 5}}>{item.h_hotel_phone}</Text>}
            {item.h_hotel_website && <Text style={{fontSize: 16}}>{item.h_hotel_website}</Text>}
        </View>
    </Modal>
  )
}
