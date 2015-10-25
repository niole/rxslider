const SliderUtils = require('./sliderutils');
const Handle = require('./handle');
const $ = require('jquery');
const React = require('react');
const Rx = require('rx');

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pxHandle: props.marginleft};
    this.utils = SliderUtils;
  }

  showHandle(ml, data, range, width, height, px) {
    let value;
    let pix;
    if (px >= ml+width) {
      //value at highest value, px at highest px
      value = data[data.length-1];
      pix = ml+width;
    } else if (px <= ml) {
      //value at lowest value and pos
      value = data[0];
      pix = ml;
    } else {
      value = this.utils.pxToInd(this.utils.pxPerInd(width, range),
                                   this.utils.relativeMouseX(px, ml));
      pix = px;
    }
    return <Handle
             px={pix}
             value={value}
            />;

  }

  componentDidMount() {
    const mouseDown = Rx.Observable.fromEvent(document, 'mousedown');
    const mouseMove = Rx.Observable.fromEvent(document, 'mousemove');
    const mouseUp = Rx.Observable.fromEvent(document, 'mouseup');
    const mouseDrag = mouseDown.selectMany( () => {
                        return mouseMove.takeUntil(mouseUp);
                      });
    mouseDrag.subscribe( (e) => {
      this.setState({pxHandle: this.utils.getMouseX(e)});
    });
  }
  render() {
    let {marginleft, data, width, height} = this.props;
    return (
      <div id="counter">
        {this.showHandle(marginleft, data, data.length,
                         width, height, this.state.pxHandle)}
      </div>
    );
  }
}

Slider.propTypes = {data: React.PropTypes.array,
                    marginleft: React.PropTypes.number,
                    range: React.PropTypes.number,
                    width: React.PropTypes.number,
                    height: React.PropTypes.number};

module.exports = Slider;
