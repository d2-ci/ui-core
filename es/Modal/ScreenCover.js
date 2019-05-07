import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
export const ScreenCover = ({
  onClick
}) => React.createElement("div", {
  onClick: onClick,
  className: "jsx-3567969760" + " " + "screen-cover"
}, React.createElement(_JSXStyle, {
  id: "3567969760"
}, [".screen-cover.jsx-3567969760{background:rgba(200,200,200,0.6);height:100%;left:0;position:absolute;top:0;width:100%;}"]));
ScreenCover.propTypes = {
  onClick: PropTypes.func
};