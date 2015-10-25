const Counter = require('./counter');
const Slider = require('./slider');
const $ = require('jquery');
const Rx = require('rx');
const React = require('react');
let ReactDOM;
try {
  ReactDOM = require('react-dom');
} catch(e) {
  ReactDOM = React;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currPosHandle: 0};
  }
  render() {
    return <Slider
            marginleft={0}
            data={[1,2,3,4,5,6,7,8,9,10]}
            width={600}
            height={5}
            />;
  }
}

App.defaultProps = { init: 0 };

ReactDOM.render(<App/>, document.body);
