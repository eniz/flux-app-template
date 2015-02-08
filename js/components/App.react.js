'use strict';

var React = require('react');
var CartContainer = require('./CartContainer.react');
var ProductsContainer = require('./ProductsContainer.react');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <ProductsContainer />
        <CartContainer />
      </div>
    );
  }
});


module.exports = App;