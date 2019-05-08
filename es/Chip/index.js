import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme';
import { Content } from './Content';
import { Icon } from './Icon';
import { Remove } from './Remove';

class Chip extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onClick", e => {
      if (!this.props.disabled && this.props.onClick) {
        this.props.onClick(e);
      }
    });
  }

  render() {
    const {
      selected,
      disabled,
      dragging,
      overflow,
      className,
      children
    } = this.props;
    return React.createElement("div", {
      onClick: this.onClick,
      className: _JSXStyle.dynamic([["2053480932", [colors.grey200, colors.grey900, colors.grey300, theme.secondary600, colors.white]]]) + " " + (cx(className, {
        selected,
        disabled,
        dragging
      }) || "")
    }, React.createElement(Icon, {
      icon: this.props.icon
    }), React.createElement(Content, {
      overflow: overflow,
      children: children
    }), React.createElement(Remove, {
      onRemove: this.props.onRemove
    }), React.createElement(_JSXStyle, {
      id: "2053480932",
      dynamic: [colors.grey200, colors.grey900, colors.grey300, theme.secondary600, colors.white]
    }, [`div.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:32px;margin:4px;border-radius:16px;background-color:${colors.grey200};font-size:14px;line-height:16px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:${colors.grey900};}`, `div.__jsx-style-dynamic-selector:hover{background-color:${colors.grey300};}`, `.selected.__jsx-style-dynamic-selector{background-color:${theme.secondary600};font-weight:500;}`, ".selected.__jsx-style-dynamic-selector:hover{background-color:#00695c;}", `.selected.__jsx-style-dynamic-selector,.selected.__jsx-style-dynamic-selector .icon.__jsx-style-dynamic-selector,.selected.__jsx-style-dynamic-selector .remove-icon.__jsx-style-dynamic-selector{color:${colors.white};}`, ".disabled.__jsx-style-dynamic-selector{cursor:not-allowed;opacity:0.3;}", ".disabled.__jsx-style-dynamic-selector .remove-icon.__jsx-style-dynamic-selector{pointer-events:none;}", ".dragging.__jsx-style-dynamic-selector{box-shadow:0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);}"]));
  }

}

Chip.propTypes = {
  children: propTypes.string.isRequired,
  className: propTypes.string,
  icon: propTypes.element,
  onClick: propTypes.func,
  onRemove: propTypes.func,
  selected: propTypes.bool,
  disabled: propTypes.bool,
  dragging: propTypes.bool,
  overflow: propTypes.bool
};
export { Chip };