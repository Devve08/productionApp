import React, {useEffect, useState} from 'react'
import {View, Image, TouchableOpacity, FlatList, Text, StyleSheet} from 'react-native'
import HotelInfoModal from '../components/Modals/HotelInfoModal'


export default function HotelsList({navigation, route}) {
    const [modalOpen, setModalOpen] = useState(false)
    const [hotel, setHotel] = useState({})
    const hotels = route.params.hotels

    const openModal = () => {
        setModalOpen(!modalOpen)
    }

    useEffect(()=> {
        console.log(hotels)
    }, [])
  return (
    <View style={styles.container}>
   {hotels.length > 0 ? (
        <FlatList 
    keyExtractor={(item, _index)=> _index}
    style={{width: '100%', padding: 20}}
    data={hotels}
    renderItem={({item, index})=> (
        <TouchableOpacity onPress={()=> {
            openModal()
            setHotel(item)
        }} key={index} style={styles.newsContainer}>
            <Image style={styles.image} source={{uri: item.hotel_profile}} />
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.h_hotel_name}</Text>
        </TouchableOpacity>
    )}
    /> 
   ): (
       <Text>There are no available places in this category</Text>
   )}
   <HotelInfoModal item={hotel} modalOpen={modalOpen} closeModal={openModal} />
</View>
  )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1,
        backgroundColor: 'black'
    },
    newsContainer: {
        backgroundColor: '#d7af43', 
        height: 75, width: '100%', 
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
        borderRadius: 10
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 20,

    }
})