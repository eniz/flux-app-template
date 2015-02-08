'use strict';

require('es5-shim');
require('es5-shim/es5-sham');

var React = require('react');
var App = require('./components/App.react');

var WebAPIUtils = require('./utils/WebAPIUtils');

WebAPIUtils.getAllProducts();

React.render(
  React.createElement(App, null),
  document.getElementById('flux-app')
);