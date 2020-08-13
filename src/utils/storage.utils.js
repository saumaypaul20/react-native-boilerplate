import AsyncStorage from '@react-native-community/async-storage';

let Storage = {
    get: async function (key){
        try {
          const value = await AsyncStorage.getItem(key)
          if(value !== null) {
            return JSON.parse(value)
          }
          return null
        } catch(e) {
           return null
        }
      },

    set: async function(key,value){
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(`${key}`, jsonValue)
        } catch (e) {
          // saving error
        }
        return true
      },

     clear: async function(key){
        try {
          await AsyncStorage.removeItem(key)
        } catch(e) {
          // remove error
          return false
        }
      
        return true
      },

    clearAll: async function() {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
          return null
        }
      
        return true
      }
}


export default Storage