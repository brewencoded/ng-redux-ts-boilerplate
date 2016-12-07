import 'angular';
import 'angular-ui-router';
import 'core-js/shim';
// load our default (non specific) css
import "./styles/screen.scss";

angular.module("app", ['ui.router']);

// redux
import './Redux';

// router
import './router';

// controllers
import './controllers/incrementCtrl';
