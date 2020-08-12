import { combineReducers } from 'redux';
import authReducer from './auth.reducer'

const reducers = {
    authReducer,
    //add reducers onwards
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;
