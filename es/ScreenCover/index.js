import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
export const ScreenCover = ({
  onClick,
  withoutBackgroundColor
}) => React.createElement("div", {
  onClick: onClick,
  className: "jsx-2926963015" + " " + (cx({
    'with-background-color': !withoutBackgroundColor
  }) || "")
}, React.createElement(_JSXStyle, {
  id: "2926963015"
}, ["div.jsx-2926963015{height:100%;left:0;position:absolute;top:0;width:100%;}", ".with-background-color.jsx-2926963015{background:rgba(200,200,200,0.6);}"]));
ScreenCover.propTypes = {
  onClick: propTypes.func,
  withoutBackgroundColor: propTypes.bool
};