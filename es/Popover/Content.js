import _JSXStyle from "styled-jsx/style";
import React from 'react';
import cx from 'classnames';
import { invertSide } from './helpers';
import { colors, layers } from '../theme';
export const Content = React.forwardRef(({
  side,
  children,
  position,
  noArrow,
  adjustment
}, ref) => React.createElement("div", {
  ref: ref,
  style: position,
  className: _JSXStyle.dynamic([["2492320286", [colors.white, layers.applicationTop, colors.white, colors.white,
  /**
  * Pythagoras theorem in a square
  * s^2 + s^2 = d^2 (s = side, d = diagonal)
  *
  * diagonal = 10px
  * => side ~= 7px
  */
  '', adjustment.adjustmentHorizontal, adjustment.adjustmentHorizontal, adjustment.adjustmentVertical, adjustment.adjustmentVertical]]]) + " " + (cx('container', {
    'with-arrow': !noArrow,
    [`with-arrow-${invertSide(side)}`]: !noArrow
  }) || "")
}, React.createElement("div", {
  className: _JSXStyle.dynamic([["2492320286", [colors.white, layers.applicationTop, colors.white, colors.white, '', adjustment.adjustmentHorizontal, adjustment.adjustmentHorizontal, adjustment.adjustmentVertical, adjustment.adjustmentVertical]]]) + " " + "content"
}, children), React.createElement(_JSXStyle, {
  id: "2492320286",
  dynamic: [colors.white, layers.applicationTop, colors.white, colors.white, '', adjustment.adjustmentHorizontal, adjustment.adjustmentHorizontal, adjustment.adjustmentVertical, adjustment.adjustmentVertical]
}, [`.container.__jsx-style-dynamic-selector{background:${colors.white};box-shadow:0 0 3px rgba(0,0,0,0.6);position:absolute;z-index:${layers.applicationTop};}`, ".content.__jsx-style-dynamic-selector{position:relative;z-index:2;max-height:100vh;overflow-y:auto;}", `.with-arrow.__jsx-style-dynamic-selector:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:${colors.white};z-index:1;}`, `.with-arrow.__jsx-style-dynamic-selector:before{content:'';background:${colors.white};position:absolute;z-index:0;box-shadow:0 0 3px black;${''} width:7px;height:7px;}`, `.with-arrow-top.__jsx-style-dynamic-selector:before{top:-3px;left:calc(50% + ${adjustment.adjustmentHorizontal}px);-webkit-transform:translateX(-50%) rotate(45deg);-ms-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);}`, `.with-arrow-bottom.__jsx-style-dynamic-selector:before{bottom:-3px;left:calc(50% + ${adjustment.adjustmentHorizontal}px);-webkit-transform:translateX(-50%) rotate(45deg);-ms-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);}`, `.with-arrow-right.__jsx-style-dynamic-selector:before{right:-3px;top:calc(50% + ${adjustment.adjustmentVertical}px);-webkit-transform:translateY(-50%) rotate(45deg);-ms-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);}`, `.with-arrow-left.__jsx-style-dynamic-selector:before{left:-3px;top:calc(50% + ${adjustment.adjustmentVertical}px);-webkit-transform:translateY(-50%) rotate(45deg);-ms-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);}`])));