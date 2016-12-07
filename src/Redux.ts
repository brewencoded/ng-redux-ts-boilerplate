import createStore from './store';
import Redux from './types/Redux';

class ReduxService implements ng.IServiceProvider {
    public $get(): Redux {
        const store: Redux.Store<any> = createStore({});
        return {
            dispatch(fn): void {
                store.dispatch((dispatch) => {
                    fn(dispatch);
                })
            },
            getState(): Object {
                return store.getState();
            },
            subscribe: store.subscribe
        };
    }
}

export default angular.module('app')
.provider('Redux', ReduxService);
