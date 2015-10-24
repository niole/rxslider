const $ = require('jquery');
const React = require('react');
const Rx = require('rx');
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
  componentDidMount() {
    const counter = document.getElementById('counter');
    const source = Rx.Observable.fromEvent(counter, 'click');
    source.subscribe(e => {
      this.tick();
    });
  }
  render() {
    return (
      <div id="counter">
        Clicks: {this.state.count}
      </div>
    );
  }
}

Counter.propTypes = { init: React.PropTypes.number };

module.exports = Counter;
