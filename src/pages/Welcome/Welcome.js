import React from 'react'
import { View, Text, PlatformColor } from 'react-native'
import { Colors } from '../../theme'

const Welcome = () => {
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:40}} >Welcome</Text>
        </View>
    )
}

export default Welcome
