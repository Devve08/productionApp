import { NavigationContainer } from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react'
import {View, FlatList, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

import SessionContext from '../context/SessionContext';

export default function AllNews({navigation}) {
    const { getNewsInfo } = useContext(SessionContext);
    const [news, setNews] = useState([])

    useEffect(async()=> {
        const res = await getNewsInfo()
        setNews(res.news_array)
        console.log(res.news_array)
    },[])
  return (
    <View style={styles.container}>
        <FlatList 
        keyExtractor={(item, _index)=> _index}
        style={{width: '100%', padding: 20}}
        data={news}
        renderItem={({item, index})=> (
            <TouchableOpacity onPress={()=>navigation.navigate('SingleNews', {item})} key={index} style={styles.newsContainer}>
                <Image style={styles.image} source={{uri: item.news_profile}} />
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.ln_news_title}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1,
        backgroundColor: "#d7af43"
    },
    newsContainer: {
        backgroundColor: '#FFFFFF', 
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