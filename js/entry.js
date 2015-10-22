const Counter = require('./counter');
const $ = require('jquery');
const React = require('react');
let ReactDOM;
try {
  ReactDOM = require('react-dom');
} catch(e) {
  ReactDOM = React;
}

class App extends React.Component {
  render() {
    return <Counter init={this.props.init}/>;
  }
}

App.defaultProps = { init: 0 };

ReactDOM.render(<App/>, document.body);
