import {
    INC
} from '../constants/incrementConstants';

class initialState {
    number: Number = 0;
}
import Action from '../types/Action';

export default function(state=new initialState, action: Action): Object {
    switch (action.type) {
        case INC:
            return Object.assign({}, state, {
                number: action.payload + state.number
            });
        default:
            return state;
    }
};
