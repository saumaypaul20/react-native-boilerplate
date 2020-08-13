import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Fonts, Colors } from '../../theme'
import CButton from '../../common/CButton.js/CButton'
import Modal from 'react-native-modal'
const DummyComp = () => {
    const [visible, setvisible] = useState(false)

    const handleModal = ()=>{
        setvisible(!visible)
    }
    return (
        <>
            <View style={{backgroundColor: Colors.white, paddingVertical:20, paddingHorizontal:30, borderRadius:10, marginTop:10, justifyContent:'center', alignItems:'center', elevation:10}}>
                <Text style={{fontSize:40, fontFamily: Fonts.FONT_SEMIBOLD}}>Hola!</Text>
                <Text style={{fontSize:20, color: Colors.lightGreen}}>Welcome to this Boilerplate</Text>
            </View>
            <View style={{padding:20, marginTop:20}}>
                <CButton label={"Like"} iconname={"thumbs-up"} onPress={()=>handleModal()}/>
            </View>
            
            <Modal 
            isVisible={visible} 
            onBackButtonPress={()=> handleModal()} 
            onBackdropPress={()=> handleModal()}
            >
                <View style={{padding:30, justifyContent:'center', alignItems:'center',  backgroundColor: Colors.white}}>
                    <Text style={{fontSize:30, marginVertical:20, textAlign:'center'}}>Awww! Thanks a lot!</Text>

                    <CButton label="Okay now close this Modal" onPress={()=> handleModal()} backgroundColor={Colors.red}/>
                </View>
            </Modal>
        </>
    )
}

export default DummyComp
