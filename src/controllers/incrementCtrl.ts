import Route from '../types/Route';

import {
    increment
} from '../actions/index';

export default angular.module("app")
.controller('incrementCtrl', ['$scope', 'Redux', ($scope, Redux) => {
    Redux.subscribe(() => {
        $scope.incrementor = Redux.getState().increment;
    });
    $scope.increment = (amount=1) => {
        Redux.dispatch(increment(amount));
    }
}]);
