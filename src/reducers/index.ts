import {
    combineReducers
} from 'redux';
import increment from './incrementReducer';
import auth from './authReducer';
import navigation from './navigationReducer';

export const rootReducer = combineReducers({
    increment,
    auth,
    navigation
})

export default rootReducer
