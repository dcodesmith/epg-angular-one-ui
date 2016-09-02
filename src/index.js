import angular from 'angular';
import ngResource from 'angular-resource';
import angularMocks from 'angular-mocks/angular-mocks';

import provider from './provider/config';
import components from './components';
import channel from './channel';
import home from './home';
import services from './services';
import filters from './filters';

import './images/fv56lj0.svg';
import './images/hq09ky1.svg';
import './images/kl05fx3.svg';
import './images/vf63ko9.svg';

// import 'style!raw!normalize.css';
import './styles/base.less';

if (ON_TEST) {
  angularMocks;
  // require('angular-mocks/angular-mocks');
}

const app = angular.module('app', ['ngResource']);
app.config(provider);

// // require directives, services and controllers below
// // consider using $inject instead of ng-annotate plugin

home(app);
filters(app);
components(app);
services(app);
