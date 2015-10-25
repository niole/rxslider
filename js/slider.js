const $ = require('jquery');
const React = require('react');
const Rx = require('rx');

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currPosHandle: 0};
  }
  componentDidMount() {

  }
  render() {
    let {range, width, height} = this.props;
    return (
      <div id="counter">
        {range}
        {width}
        {height}
      </div>
    );
  }
}

Slider.defaultProps = { range: 10, width: 600, height: 5};

module.exports = Slider;
