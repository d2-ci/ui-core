import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const ScreenCover = ({
  onClick
}) => React.createElement("div", {
  onClick: onClick,
  className: "jsx-928972940" + " " + "screen-cover"
}, React.createElement(_JSXStyle, {
  id: "928972940"
}, ["div.jsx-928972940{background:rgba(200,200,200,0.6);height:100%;left:0;position:absolute;top:0;width:100%;}"]));

ScreenCover.propTypes = {
  onClick: propTypes.func
};
export { ScreenCover };