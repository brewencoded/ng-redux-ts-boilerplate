import 'angular';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

export default function(initialState={}) {
    const finalCreateStore = compose(
            applyMiddleware(thunk)
        )(createStore);

    return finalCreateStore(rootReducer, initialState);
}
