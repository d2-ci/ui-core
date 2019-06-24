import _JSXStyle from "styled-jsx/style";
import React from 'react';
import cx from 'classnames';
import { invertSide } from './helpers';
export const Content = React.forwardRef(({
  side,
  children,
  position,
  withArrow,
  adjustment
}, ref) => React.createElement("div", {
  ref: ref,
  style: position,
  className: _JSXStyle.dynamic([["3063431775", [
  /**
  * Pythagoras theorem in a square
  * s^2 + s^2 = d^2 (s = side, d = diagonal)
  *
  * diagonal = 20px
  * => side ~= 14px
  */
  '', adjustment.adjustmentHorizontal, adjustment.adjustmentHorizontal, adjustment.adjustmentVertical, adjustment.adjustmentVertical]]]) + " " + (cx('container', {
    'with-arrow': withArrow,
    [`with-arrow-${invertSide(side)}`]: withArrow
  }) || "")
}, React.createElement("div", {
  className: _JSXStyle.dynamic([["3063431775", ['', adjustment.adjustmentHorizontal, adjustment.adjustmentHorizontal, adjustment.adjustmentVertical, adjustment.adjustmentVertical]]]) + " " + "content"
}, children), React.createElement(_JSXStyle, {
  id: "3063431775",
  dynamic: ['', adjustment.adjustmentHorizontal, adjustment.adjustmentHorizontal, adjustment.adjustmentVertical, adjustment.adjustmentVertical]
}, [".container.__jsx-style-dynamic-selector{background:white;box-shadow:0 0 3px rgba(0,0,0,0.6);position:absolute;}", ".content.__jsx-style-dynamic-selector{position:relative;z-index:2;max-height:100vh;overflow-y:auto;}", ".with-arrow.__jsx-style-dynamic-selector:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:white;z-index:1;}", `.with-arrow.__jsx-style-dynamic-selector:before{content:'';background:white;position:absolute;z-index:0;box-shadow:0 0 3px black;${''} width:14px;height:14px;}`, `.with-arrow-top.__jsx-style-dynamic-selector:before{top:-7px;left:calc(50% + ${adjustment.adjustmentHorizontal}px);-webkit-transform:translateX(-50%) rotate(45deg);-ms-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);}`, `.with-arrow-bottom.__jsx-style-dynamic-selector:before{bottom:-7px;left:calc(50% + ${adjustment.adjustmentHorizontal}px);-webkit-transform:translateX(-50%) rotate(45deg);-ms-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);}`, `.with-arrow-right.__jsx-style-dynamic-selector:before{right:-7px;top:calc(50% + ${adjustment.adjustmentVertical}px);-webkit-transform:translateY(-50%) rotate(45deg);-ms-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);}`, `.with-arrow-left.__jsx-style-dynamic-selector:before{left:-7px;top:calc(50% + ${adjustment.adjustmentVertical}px);-webkit-transform:translateY(-50%) rotate(45deg);-ms-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);}`])));