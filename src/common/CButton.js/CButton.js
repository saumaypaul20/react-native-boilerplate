import React from 'react'
import { View, Text } from 'react-native'
import { Button, Icon } from 'native-base'
import { Colors } from '../../theme'

const CButton = ({onPress, label, iconname, backgroundColor }) => {
    return (
        <Button rounded onPress={()=> onPress ? onPress(): alert("Hey Dummy!")} style={{backgroundColor: backgroundColor}}>
          {  iconname && <Icon type="FontAwesome" name={iconname} style={{fontSize:15, padding:0}} />}
            <Text style={{fontSize:20, paddingRight:20, paddingLeft: iconname ? 0:20, color: Colors.white}}>{label}</Text>
        </Button>
    )
}

export default CButton
