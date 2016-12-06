import {
    INC
} from '../constants/incrementConstants';

class initialState {
    number: Number = 0;
}

interface Action {
    type: String;
    payload: any;
}

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
