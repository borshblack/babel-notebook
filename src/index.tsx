// const babel = require("@babel/core");
// const result = babel.transformSync(
//   "const sampleFunction = (value) => {return value + value}",
//   { browserslistConfigFile: false }
// );
// console.log(result.code);

// const sampleFunction = (value) => {
//   return value + value;
// };

import { React } from "react";
import { render } from "react-dom";

interface AppProps {
  description: string;
}
const greetingMessage: string = "hello";

const App = ({ description }: AppProps) => {
  return (
    <React.Fragment>
      <h1>{greetingMessage}</h1>
      <p>{description}</p>
    </React.Fragment>
  );
};

const DOMRootElement = document.createElement("div");

render(DOMRootElement, <App description="Some description..." />);
