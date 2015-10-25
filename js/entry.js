const Counter = require('./counter');
const Slider = require('./slider');
const SliderUtils = require('./sliderutils');
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
  componentDidMount() {
    const mouseDown = Rx.Observable.fromEvent(document, 'mousedown');
    const mouseMove = Rx.Observable.fromEvent(document, 'mousemove');
    const mouseUp = Rx.Observable.fromEvent(document, 'mouseup');
    const mouseDrag = mouseDown.selectMany( () => {
                        return mouseMove.takeUntil(mouseUp);
                      });
    mouseDrag.subscribe( (e) => { console.log(e); });
  }
  render() {
    return <Slider/>;
  }
}

App.defaultProps = { init: 0 };

ReactDOM.render(<App/>, document.body);
