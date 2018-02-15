'use strict';
const angular = require('angular');
import SettingsController from './settings.controller';

export default angular.module('myApp2App.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
