import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Fragment, PureComponent } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

class ScreenCover extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "elContainer", React.createRef());

    _defineProperty(this, "onDocClick", evt => {
      if (this.elContainer.current && this.elContainer.current === evt.target) {
        this.props.onClick();
      }
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  render() {
    return React.createElement("div", {
      ref: this.elContainer,
      className: "jsx-3284545258" + " " + "screen-cover"
    }, React.createElement("div", {
      className: "jsx-3284545258" + " " + "children"
    }, this.props.children), React.createElement(_JSXStyle, {
      id: "3284545258"
    }, [".screen-cover.jsx-3284545258{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;height:100%;width:100%;left:0;top:0;z-index:10000;background:rgba(200,200,200,0.6);}"]));
  }

}

ScreenCover.propTypes = {
  onClick: propTypes.func
};
export { ScreenCover };