import {
    INC
} from '../constants/incrementConstants'

export default function (increment: String): Function {
    return function(dispatch: Function): void {
        dispatch({
            type: INC,
            payload: increment
        });
    }
}
