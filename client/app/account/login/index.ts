'use strict';
const angular = require('angular');
import LoginController from './login.controller';

export default angular.module('myApp2App.login', [])
  .controller('LoginController', LoginController)
  .name;
