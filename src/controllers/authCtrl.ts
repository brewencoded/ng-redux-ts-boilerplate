import Route from '../types/Route';

import {
    auth
} from '../actions/index';
import Redux from '../types/Redux';

export default angular.module("app")
.controller('authCtrl', ['$scope', 'Redux', ($scope, Redux: Redux) => {
    $scope.email = '';
    $scope.password = '';
    if (!$scope.auth) {
        $scope.auth = Redux.getState().auth;
    }
    Redux.subscribe(() => {
        $scope.auth = Redux.getState().auth;
    });
    $scope.login = (): void => {
        Redux.dispatch(auth.login({ email: $scope.email, password: $scope.password }));
    }
    $scope.logout = (): void => {
        Redux.dispatch(auth.logout());
    }
}]);
