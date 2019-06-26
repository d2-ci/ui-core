import _JSXStyle from "styled-jsx/style";
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
const Tab = forwardRef(({
  icon,
  label,
  onClick,
  selected,
  disabled,
  stacked,
  children
}, ref) => React.createElement("button", {
  onClick: onClick,
  ref: ref,
  className: "jsx-2872561569" + " " + `${cx('d2ui-align-icon', {
    selected,
    disabled,
    stacked
  })}`
}, children ? children : React.createElement("span", {
  className: "jsx-2872561569"
}, label), React.createElement(_JSXStyle, {
  id: "2872561569"
}, ["button.jsx-2872561569{background-color:transparent;height:100%;border:none;outline:none;color:rgba(0,0,0,0.6);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;cursor:pointer;padding:0.375rem 1.5rem;text-transform:uppercase;font-size:0.875rem;line-height:2.25rem;font-weight:500;-webkit-letter-spacing:0.08929em;-moz-letter-spacing:0.08929em;-ms-letter-spacing:0.08929em;letter-spacing:0.08929em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:20rem;}", "button.selected.jsx-2872561569{color:#000000;}", "button.disabled.jsx-2872561569{color:rgba(0,0,0,0.3);pointer-events:none;}", "button.stacked.jsx-2872561569{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "button.jsx-2872561569>svg,button.jsx-2872561569>svg:first-child,button.jsx-2872561569>svg:last-child,button.jsx-2872561569>svg:only-child{margin:0.6rem 0 0 0;}", "button.jsx-2872561569:active{background-color:#e0e0e0;}"])));
Tab.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  addTabRef: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  stacked: PropTypes.bool,
  children: PropTypes.node
};
Tab.defaultProps = {
  active: false,
  disabled: false,
  stacked: false,
  onClick: () => {}
};
export default Tab;