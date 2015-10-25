const Counter = require('./counter');
const Slider = require('./slider');
const SliderUtils = require('./sliderutils');
const $ = require('jquery');
const React = require('react');
let ReactDOM;
try {
  ReactDOM = require('react-dom');
} catch(e) {
  ReactDOM = React;
}

SliderUtils.works();

class App extends React.Component {
  render() {
    return <Slider/>;
  }
}

App.defaultProps = { init: 0 };

ReactDOM.render(<App/>, document.body);
