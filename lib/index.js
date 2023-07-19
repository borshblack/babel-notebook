"use strict";

var _react = require("react");
var _reactDom = require("react-dom");
// const babel = require("@babel/core");
// const result = babel.transformSync(
//   "const sampleFunction = (value) => {return value + value}",
//   { browserslistConfigFile: false }
// );
// console.log(result.code);

// const sampleFunction = (value) => {
//   return value + value;
// };

const greetingMessage = "hello";
const App = description => {
  return /*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, /*#__PURE__*/_react.React.createElement("h1", null, greetingMessage), /*#__PURE__*/_react.React.createElement("p", null, description));
};
const DOMRootElement = document.createElement("div");
(0, _reactDom.render)(DOMRootElement, /*#__PURE__*/_react.React.createElement(App, {
  description: "Some description..."
}));