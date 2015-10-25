const $ = require('jquery');
const React = require('react');
const Rx = require('rx');

let SliderUtils = {
  getMouseX(event) {
    return event.clientX;
  },
  pxToInd(pxperind, relativemousex) {
    /*
      returns index of data closest to mouse position
    */
    return Math.round(relativemousex/pxperind);
  },
  indToPx(pxperind, ind, marginleft) {
    /*
      pxperind - number of px per data point
      ind - index of data point
      marginleft - px dist from left side of window to left side of slider
      **converts data index to position relative to window
    */
    return marginleft + (pxperind*(ind+1));
  },
  pxPerInd(widthslider, totalpts) {
    /*
     widthslider - width slider in px
     totalpts - total number of data points
     returns ratio of px to data point
    */
    return widthslider/totalpts;
  },
  relativeMouseX(mousex, marginleft) {
    /*
      mousex - px value of mouse position relative to window
      marginleft - px dist from left side of window to left side of slider
      **converts px value of mouse position to be relative to slider
    */
    return mousex - marginleft;
  }
};

module.exports = SliderUtils;
