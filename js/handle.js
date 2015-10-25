const $ = require('jquery');
const React = require('react');
const Rx = require('rx');

class Handle extends React.Component {
  constructor(props) {
    super(props);
  }
  drawHandle(px, value) {
    let handleStyle = {left: px};
    return <div id="handle" style={handleStyle}>
            {value}
           </div>;
  }
  render() {
    let {px, value} = this.props;
    return (
      <div>
        {this.drawHandle(px,value)}
      </div>
    );
  }
}

Handle.propTypes = { px: React.PropTypes.number,
                     value: React.PropTypes.number };

module.exports = Handle

