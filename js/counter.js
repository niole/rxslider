const $ = require('jquery');
const React = require('react');
let ReactDOM;
try {
  ReactDOM = require('react-dom');
} catch(e) {
  ReactDOM = React;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.init};
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
}

Counter.propTypes = { init: React.PropTypes.number };

module.exports = Counter;
