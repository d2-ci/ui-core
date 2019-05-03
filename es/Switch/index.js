import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme.js';
import { SwitchIcon } from '../icons/Switch.js';
import styles from './styles';

class Switch extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      checked: this.props.defaultChecked || false
    });

    _defineProperty(this, "onChange", evt => {
      const {
        checked
      } = evt.target;
      this.setState({
        checked
      });
      this.props.onChange(this.props.name, checked);
    });
  }

  render() {
    const {
      required,
      valid,
      error,
      warning,
      className,
      disabled,
      name,
      checked = this.state.checked
    } = this.props;
    return React.createElement("label", {
      className: `jsx-${styles.__hash}` + " " + (cx(className, {
        disabled
      }) || "")
    }, React.createElement("input", {
      type: "checkbox",
      disabled: disabled,
      name: name,
      checked: checked,
      onChange: this.onChange,
      className: `jsx-${styles.__hash}`
    }), React.createElement(SwitchIcon, {
      checked: checked,
      disabled: disabled,
      valid: valid,
      warning: warning,
      error: error
    }), React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx({
        required,
        disabled
      }) || "")
    }, this.props.label), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

Switch.defaultProps = {
  onChange: () => {}
};
Switch.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  className: propTypes.string,
  label: propTypes.string,
  required: propTypes.bool,
  defaultChecked: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool
};
export { Switch };