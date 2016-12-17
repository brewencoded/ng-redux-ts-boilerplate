import Route from './types/Route';

// templates
const About = require('./templates/about.html');
const Home = require('./templates/home.html');
const Login = require('./templates/login.html');
const Profile = require('./templates/profile.html');

export default angular.module('app')
.config([
    '$urlRouterProvider', '$stateProvider', '$locationProvider',
    function Router($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    let HomeState = {} as Route;
    HomeState = {
        name: 'root',
        url: '/',
        template: Home
    };

    let AboutState = {} as Route;
    AboutState = {
        name: 'about',
        url: '/about',
        template: About
    };

    let LoginState = {} as Route;
    LoginState = {
        name: 'login',
        url: '/login',
        template: Login
    };

    let ProfileState = {} as Route;
    ProfileState = {
        name: 'profile',
        url: '/profile',
        template: Profile
    };

    $stateProvider.state(HomeState);
    $stateProvider.state(AboutState);
    $stateProvider.state(LoginState);
    $stateProvider.state(ProfileState);
}]);
