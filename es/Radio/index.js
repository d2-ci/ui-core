function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme.js';
import styles from './styles.js';
import { Checked, Unchecked } from '../icons/Radio.js';
const icons = {
  styles: React.createElement(_JSXStyle, {
    id: "814919498"
  }, `svg.jsx-814919498{height:24px;width:24px;fill:${theme.default};}.checked.jsx-814919498{fill:${colors.teal400};}.disabled.jsx-814919498{fill:${colors.grey500};}.error.jsx-814919498{fill:${theme.error};}.valid.jsx-814919498{fill:${theme.valid};}.warning.jsx-814919498{fill:${theme.warning};}`),
  className: "jsx-814919498"
};

class Radio extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChange", () => this.props.onChange(this.props.name, this.props.value));
  }

  render() {
    const {
      required,
      valid,
      error,
      warning,
      checked,
      className,
      disabled
    } = this.props;
    const classes = cx(icons.className, {
      checked: checked && !valid && !error && !warning,
      disabled,
      valid,
      error,
      warning
    });
    const icon = checked ? React.createElement(Checked, {
      className: classes
    }) : React.createElement(Unchecked, {
      className: classes
    });
    return React.createElement("label", {
      className: `jsx-${styles.__hash}` + " " + (cx(className, {
        disabled
      }) || "")
    }, React.createElement("input", {
      type: "radio",
      name: this.props.name,
      value: this.props.value,
      checked: this.props.checked,
      disabled: this.props.disabled,
      onChange: this.onChange,
      className: `jsx-${styles.__hash}`
    }), icon, React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx({
        required
      }) || "")
    }, this.props.label), icons.styles, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

Radio.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool
};
export { Radio };