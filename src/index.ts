import 'angular';
import 'angular-ui-router';
import 'core-js/shim';
// load our default (non specific) css
import "./styles/screen.scss";

angular.module("app", ['ui.router']);

// redux
import './Redux';

// controllers
import './controllers/incrementCtrl';
import './controllers/authCtrl';

// router
import './router';

// redux router
import './ReduxRouter';
