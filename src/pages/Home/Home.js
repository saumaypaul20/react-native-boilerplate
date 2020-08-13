import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images, Colors, Fonts } from '../../theme'
import Modal from 'react-native-modal'
import { Button } from 'native-base'
import DummyComp from '../../components/DummyComp/DummyComp'
const Home = () => {
    return (
        <View style={{justifyContent:'center', flex:1, alignSelf:'stretch', alignItems:'center'}}>
            
            <Image source={Images.example_img} style={{width:150, height:150, margin:5, borderRadius:75}} />
            <DummyComp/>

        </View>
    )
}

export default Home