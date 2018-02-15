'use strict';
const angular = require('angular');

export default angular.module('myApp2App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
