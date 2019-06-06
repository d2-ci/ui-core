import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { PureComponent, isValidElement } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { arrayWithLength } from '../prop-validators';
import { Close } from '../icons/Close';
import { Valid, Warning, Error, Info } from '../icons/Status';
import styles from './styles';

var _ref =
/*#__PURE__*/
React.createElement(Valid, null);

var _ref2 =
/*#__PURE__*/
React.createElement(Warning, null);

var _ref3 =
/*#__PURE__*/
React.createElement(Error, null);

var _ref4 =
/*#__PURE__*/
React.createElement(Info, null);

const defaultIcons = {
  success: () => _ref,
  warning: () => _ref2,
  critical: () => _ref3,
  info: () => _ref4
};

const Icon = ({
  icon,
  variant
}) => {
  if (icon === false) {
    return null;
  }

  return React.createElement("div", {
    className: variant
  }, isValidElement(icon) ? icon : defaultIcons[variant]());
};

const Message = ({
  children
}) => React.createElement("div", null, children);

const Actions = ({
  actions
}) => {
  if (!actions) {
    return null;
  }

  return React.createElement("div", null, actions.map(action => React.createElement(Action, _extends({
    key: action.label
  }, action))));
};

const Action = ({
  label,
  onClick
}) => React.createElement("span", {
  onClick: onClick
}, label);

var _ref5 =
/*#__PURE__*/
React.createElement(Close, null);

const Dismiss = ({
  variant,
  onClick
}) => React.createElement("div", {
  className: variant,
  onClick: onClick
}, _ref5);

class AlertBar extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "startHideTimeout", () => {
      this.timeout = setTimeout(() => {
        this.hide();
      }, this.timeRemaining);
    });

    _defineProperty(this, "stopHideTimeOut", () => {
      this.timeRemaining = this.timeRemaining - (Date.now() - this.startTime);
      clearTimeout(this.timeout);
    });

    _defineProperty(this, "hide", () => {
      console.log('hiding');
      clearTimeout(this.timeout);
    });
  }

  componentDidMount() {
    this.startTime = Date.now();
    this.timeRemaining = this.props.duration;
    this.startHideTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  variant(status) {
    for (const key in status) {
      if (status[key]) {
        return key;
      }
    }

    return 'info';
  }

  render() {
    const {
      className,
      children,
      success,
      warning,
      critical,
      icon,
      actions
    } = this.props;
    const variant = this.variant({
      success,
      warning,
      critical
    });
    return React.createElement("div", {
      onMouseEnter: this.stopHideTimeOut,
      onMouseLeave: this.startHideTimeout,
      className: `jsx-${styles.__hash}` + " " + (cx(className, variant) || "")
    }, React.createElement(Icon, {
      icon: icon,
      variant: variant
    }), React.createElement(Message, null, children), React.createElement(Actions, {
      actions: actions
    }), React.createElement(Dismiss, {
      onClick: this.hide
    }), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

AlertBar.propTypes = {
  children: propTypes.string.isRequired,
  success: propTypes.bool,
  warning: propTypes.bool,
  critical: propTypes.bool,
  icon: propTypes.oneOfType([propTypes.bool, propTypes.element]),
  duration: propTypes.number,
  actions: arrayWithLength(0, 2, propTypes.shape({
    label: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
  })),
  onHidden: propTypes.func
};
AlertBar.defaultProps = {
  icon: true,
  duration: 15000
};
export { AlertBar };