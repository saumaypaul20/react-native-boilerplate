import { Platform, ToastAndroid, Linking, Clipboard } from "react-native";
import { Toast } from "native-base";
import { Images } from "../theme";


export const renderToast = (message) => {
    if (Platform.OS === 'android') {
      toast = ToastAndroid.show(message, ToastAndroid.LONG);
    } else {
      // TODO test this iOS
      toast = Toast.show({
        text: message,
        buttonText: 'Okay',
        position: "bottom",
        style: {marginBottom: 10}
      })
    }
    return toast;
  }
  

export const copyText =(text, label='Text') =>{
    Clipboard.setString(text)
    Toast.show({
        text: `Copied ${label}`,
        buttonText: 'Okay',
        type:"success",
        position:"bottom"
      })
}

// export const imageRenderer = (item, type=0)=>{
//   switch(item){
//       case 'USDT':
//           return type==0? Images.usdt_white :Images.usdt_black;
//       case 'INR':
//           return type==0? Images.inr_white :Images.inr_black;
//       case 'LTC':
//            return type==0? Images.ltc_white : Images.ltc_black;
//       case 'BTC':
//            return type==0? Images.btc_white : Images.btc_black;
//       case 'ETH':
//            return Images.eth_white;
//       default:
//            return type==0? Images.dash_white : Images.dash_black;
//   }
// }