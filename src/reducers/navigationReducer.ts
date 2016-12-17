import {
    NAVIGATE
} from '../constants/navigationContants';

class initialState {
    to: String = 'root';
    params: any =  null;
}
import Action from '../types/Action';

export default function(state=new initialState, action: Action): Object {
    switch (action.type) {
        case NAVIGATE:
            return Object.assign({}, state, {
                to: action.payload.to,
                params: action.payload.params
            });
        default:
            return state;
    }
};
