import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import styles, { ANIMATION_TIME } from './styles';
import { Actions, actionsPropType } from './Actions';
import { Dismiss } from './Dismiss';
import { Icon, iconPropType } from './Icon';
import { Message } from './Message';

class AlertBar extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visible: false
    });

    _defineProperty(this, "startDisplayTimeout", () => {
      this.displayTimeout = setTimeout(() => {
        this.hide();
      }, this.timeRemaining);
    });

    _defineProperty(this, "stopDisplayTimeOut", () => {
      this.timeRemaining = this.timeRemaining - (Date.now() - this.startTime);
      clearTimeout(this.displayTimeout);
    });

    _defineProperty(this, "hide", () => {
      clearTimeout(this.displayTimeout);
      this.setState({
        visible: false
      });

      if (this.props.onHidden) {
        this.onHiddenTimeout = setTimeout(this.props.onHidden, ANIMATION_TIME);
      }
    });
  }

  componentDidMount() {
    this.startTime = Date.now();
    this.timeRemaining = this.props.duration;
    this.startDisplayTimeout();
    this.show();
  }

  componentWillUnmount() {
    clearTimeout(this.displayTimeout);
    clearTimeout(this.onHiddenTimeout);
  }

  show() {
    setTimeout(() => {
      this.setState({
        visible: true
      });
    }, 0);
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
    const {
      visible
    } = this.state;
    const info = !critical && !success && !warning;
    const iconProps = {
      icon,
      critical,
      success,
      warning
    };
    return React.createElement("div", {
      onMouseEnter: this.stopDisplayTimeOut,
      onMouseLeave: this.startDisplayTimeout,
      className: `jsx-${styles.__hash}` + " " + (cx(className, {
        info,
        success,
        warning,
        critical,
        visible
      }) || "")
    }, React.createElement(Icon, iconProps), React.createElement(Message, null, children), React.createElement(Actions, {
      actions: actions
    }), React.createElement(Dismiss, {
      onClick: this.hide
    }), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

AlertBar.propTypes = {
  className: propTypes.string,
  children: propTypes.string.isRequired,
  success: propTypes.bool,
  warning: propTypes.bool,
  critical: propTypes.bool,
  icon: iconPropType,
  duration: propTypes.number,
  actions: actionsPropType,
  onHidden: propTypes.func
};
AlertBar.defaultProps = {
  icon: true,
  duration: 8000
};
export { AlertBar };