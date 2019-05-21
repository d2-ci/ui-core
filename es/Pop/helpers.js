import _JSXStyle from "styled-jsx/style";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
export const Content = React.forwardRef(({
  children,
  position,
  level
}, ref) => React.createElement("div", {
  ref: ref,
  style: position,
  className: _JSXStyle.dynamic([["1214024287", [level + 99999999 || 1]]])
}, children, React.createElement(_JSXStyle, {
  id: "1214024287",
  dynamic: [level + 99999999 || 1]
}, [`div.__jsx-style-dynamic-selector{background:white;box-shadow:0 0 3px rgba(0,0,0,0.6);max-height:100vh;overflow-y:auto;position:fixed;z-index:${level + 99999999 || 1};}`])));
export const getScrollAndClientOffset = () => {
  const body = document.body;
  const docEl = document.documentElement;
  return {
    scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
    scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
    clientTop: docEl.clientTop || body.clientTop || 0,
    clientLeft: docEl.clientLeft || body.clientLeft || 0
  };
};
export const getPosition = (anchor, popover, isNotRootLevel) => {
  if (!anchor || !popover) {
    return {
      left: 0,
      top: 0
    };
  }

  const anchorRect = anchor.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  return _objectSpread({}, getPositionHorizontal(anchorRect, popoverRect), getPositionVertical(anchorRect, popoverRect, isNotRootLevel));
  return styles;
};

const getPositionHorizontal = (anchorRect, popoverRect) => {
  const viewportWidth = window.innerWidth;
  const leftOffset = anchorRect.x + anchorRect.width;
  const rightOffset = anchorRect.x - popoverRect.width;
  const fitsToTheLeft = viewportWidth - leftOffset - popoverRect.width > 0;
  const left = fitsToTheLeft ? leftOffset : rightOffset;
  return {
    left
  };
};

const getPositionVertical = (anchorRect, popoverRect, isNotRootLevel) => {
  const {
    scrollTop,
    clientTop
  } = getScrollAndClientOffset();
  const viewportHeight = window.innerHeight;
  const fitsToTheTop = viewportHeight - anchorRect.y > popoverRect.height;

  if (!fitsToTheTop) {
    return {
      bottom: 0,
      top: 'auto'
    };
  }

  if (isNotRootLevel) {
    return {
      top: (scrollTop || clientTop) + anchorRect.y + 'px',
      bottom: 'auto'
    };
  }

  return {
    top: anchorRect.y + 'px',
    bottom: 'auto'
  };
};

export const arePositionsEqual = (left, right) => left.left === right.left && left.top === right.top && left.bottom === right.bottom;