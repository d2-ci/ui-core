import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles';

class Switch extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChange", () => {
      if (this.props.disabled) {
        return;
      }

      this.props.onChange(!this.props.checked);
    });
  }

  render() {
    const {
      status,
      disabled,
      className
    } = this.props;
    return React.createElement("label", {
      className: `jsx-${styles.__hash}` + " " + (cx(status, className, {
        disabled
      }) || "")
    }, React.createElement("input", {
      type: "checkbox",
      disabled: disabled,
      name: this.props.name,
      checked: this.props.checked,
      onChange: this.onChange,
      className: `jsx-${styles.__hash}`
    }), React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx('label', {
        [`status-${status}`]: true
      }) || "")
    }, this.props.label), this.props.required && React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "required"
    }), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

Switch.defaultProps = {
  checked: false,
  disabled: false,
  status: 'default'
};
Switch.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  className: propTypes.string,
  checked: propTypes.bool,
  label: propTypes.string,
  disabled: propTypes.bool,
  status: propTypes.oneOf(['default', 'valid', 'warning', 'error'])
};
export { Switch };
export default Switch;