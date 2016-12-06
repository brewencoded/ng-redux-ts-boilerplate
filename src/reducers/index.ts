import {
    combineReducers
} from 'redux';
import increment from './incrementReducer';

export const rootReducer = combineReducers({
    increment
})

export default rootReducer
