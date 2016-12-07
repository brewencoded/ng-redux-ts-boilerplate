import createStore from './store';

export default angular.module('app')
.service('Redux', () => {
    const store = createStore({});

    return {
        dispatch: (fn) => {
            store.dispatch((dispatch) => {
                fn(dispatch);
            })
        },
        getState: () => {
            return store.getState();
        },
        subscribe: store.subscribe
    }
});
