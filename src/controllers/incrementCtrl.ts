import Route from '../types/Route';

import {
    increment
} from '../actions/index';
import Redux from '../types/Redux';

export default angular.module("app")
.controller('incrementCtrl', ['$scope', 'Redux', ($scope, Redux: Redux) => {
    if (!$scope.incrementor) {
        $scope.incrementor = Redux.getState().increment;
    }
    Redux.subscribe(() => {
        $scope.incrementor = Redux.getState().increment;
    });
    $scope.increment = (amount=1): void => {
        Redux.dispatch(increment(amount));
    }
}]);
