import { TYPES } from "../types";

export const inputAction =(type,text) =>{
    return {
        type: type,
        payload: text,
      };
}

export const saveUserId =(id)=>{
  return{
    type: TYPES.SAVE_USER_ID,
    payload: id
  }
}

export const saveIpAction = (ip) =>{
  return{
    type: TYPES.SAVE_IP,
    payload: ip
  }
}
export const saveAuthAttributesAction = (payload) =>{
  return{
    type: TYPES.SAVE_AUTH_ATTRIBUTES,
    payload: payload
  }
}