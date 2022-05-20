import React from 'react'
import { View, Image ,Text, TouchableOpacity } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
export default function SingleNewsScreen({image, navigation,route: item}) {

  return (
    <View style={{padding:20}}>
        <TouchableOpacity style={{paddingVertical: 20}} onPress={()=> navigation.goBack()}>   
        <Ionicon name='arrow-back-outline' size={30} />
        </TouchableOpacity>
        <Image style={{width:150, height: 150, alignSelf: 'center'}} source={{uri : item.params.item.news_profile}} />
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', paddingVertical:20}}>
        {item.params.item.ln_news_title}
        </Text>

        <Text style={{fontSize: 16, alignSelf: 'center'}}>
        {item.params.item.ln_news_content}
        </Text>
    </View>
  )
}
