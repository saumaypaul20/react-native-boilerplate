import { TYPES } from "../types"

const init_state = {
    email:'',
    password:'',
    auth_attributes: null,
    user_id: null,
    ip: null
}

const  authReducer = (state = init_state, action) => {
    switch (action.type) {
        case TYPES.EMAIL_INPUT:
            state = {
                ...state,
                email: action.payload
            }
            break
        case TYPES.PASSWORD_INPUT:
            state = {
                ...state,
                password: action.payload
            }
            break
        case TYPES.SAVE_USER_ID:
            state = {
                ...state,
                user_id: action.payload
            }
            break
        case TYPES.SAVE_IP:
            state = {
                ...state,
                ip: action.payload
            }
            break
        case TYPES.SAVE_AUTH_ATTRIBUTES:
            state = {
                ...state,
                auth_attributes: action.payload
            }
            break
        default:
            return state;
    }
    return state;
}

export default authReducer;