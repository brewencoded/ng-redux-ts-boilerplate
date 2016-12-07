import Route from './types/Route';

export default angular.module('app')
.config([
    '$urlRouterProvider', '$stateProvider', '$locationProvider',
    function Router($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    let HelloState = {} as Route;
    HelloState = {
        name: 'root',
        url: '/',
        template: '<h3>hello world!</h3>'
    };

    let AboutState = {} as Route;
    AboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(HelloState);
    $stateProvider.state(AboutState);
}]);
