import 'angular';
import 'core-js/shim';
// load our default (non specific) css
import "./styles/screen.scss";

import createStore from './store';
import {
    INC
} from './constants/incrementConstants';
import {
    increment
} from './actions/index';

angular.module("app", [])
.controller('reduxCtrl', ['$scope', ($scope) => {

    const store = createStore({});
    $scope.store = store.getState();

    store.subscribe(() => {
        $scope.store = store.getState();
    });

    $scope.increment = (amount=1) => {
        store.dispatch((dispatch) => increment(amount)(dispatch));
    }
}]);
