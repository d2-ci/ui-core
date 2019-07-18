import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import cx from 'classnames';
import propTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import { statusPropType } from '../common-prop-types';
import { SwitchIcon } from '../icons/Switch.js';
import styles from './styles';
const Input = React.forwardRef(({
  name,
  disabled,
  checked,
  onChange,
  onFocus,
  onBlur
}, ref) => React.createElement("div", {
  className: "jsx-1102028186"
}, React.createElement("input", {
  type: "checkbox",
  ref: ref,
  name: name,
  disabled: disabled,
  checked: checked,
  onChange: onChange,
  onFocus: onFocus,
  onBlur: onBlur,
  className: "jsx-1102028186"
}), React.createElement(_JSXStyle, {
  id: "1102028186"
}, ["div.jsx-1102028186{height:0;width:0;overflow:hidden;}"])));

class Switch extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ref", createRef());

    _defineProperty(this, "state", {
      focus: this.props.initialFocus
    });

    _defineProperty(this, "onFocus", e => {
      this.setState({
        focus: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    });

    _defineProperty(this, "onBlur", e => {
      this.setState({
        focus: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    });
  }

  componentDidMount() {
    if (this.state.focus) {
      this.ref.current.focus();
    }
  }

  render() {
    const {
      onChange,
      name,
      className,
      label,
      required,
      checked = false,
      disabled,
      valid,
      warning,
      error
    } = this.props;
    const {
      focus
    } = this.state;
    return React.createElement("label", {
      className: `jsx-${styles.__hash}` + " " + (cx(className, {
        disabled,
        focus
      }) || "")
    }, React.createElement(Input, {
      ref: this.ref,
      name: name,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      checked: checked,
      disabled: disabled,
      onChange: onChange
    }), React.createElement(SwitchIcon, {
      checked: checked,
      disabled: disabled,
      valid: valid,
      warning: warning,
      error: error,
      focus: focus
    }), React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx({
        required,
        disabled
      }) || "")
    }, label), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

Switch.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: statusPropType,
  warning: statusPropType,
  error: statusPropType,
  initialFocus: propTypes.bool,
  onFocus: propTypes.func,
  onBlur: propTypes.func
};
export { Switch };