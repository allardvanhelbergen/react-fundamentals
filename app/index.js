const React = require('react');
const ReactDom = require('react-dom');
const PropTypes = require('prop-types');
const App = require('./components/App');

require('./index.css');


ReactDom.render(
  <App />,
  document.getElementById('app')
);