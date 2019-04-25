function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme.js';
import styles from './styles.js';
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox.js';
const icons = {
  styles: React.createElement(_JSXStyle, {
    id: "782643521"
  }, `svg.jsx-782643521{height:24px;width:24px;fill:${theme.default};}.checked.jsx-782643521{fill:${colors.teal400};}.disabled.jsx-782643521{fill:${colors.grey500};}.error.jsx-782643521{fill:${theme.error};}.valid.jsx-782643521{fill:${theme.valid};}.warning.jsx-782643521{fill:${theme.warning};}`),
  className: "jsx-782643521"
};

class Checkbox extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      indeterminate: this.props.indeterminate
    });

    _defineProperty(this, "onChange", () => {
      this.props.onChange(this.props.name, !this.props.checked);

      if (this.state.indeterminate) {
        this.setState({
          indeterminate: false
        });
      }
    });
  }

  render() {
    const {
      required,
      checked,
      className,
      disabled,
      valid,
      error,
      warning
    } = this.props;
    const classes = cx(icons.className, {
      checked: checked && !valid && !error && !warning,
      disabled,
      valid,
      error,
      warning
    });
    let icon = React.createElement(Unchecked, {
      className: classes
    });

    if (this.state.indeterminate) {
      icon = React.createElement(Indeterminate, {
        className: classes
      });
    } else if (this.props.checked) {
      icon = React.createElement(Checked, {
        className: classes
      });
    }

    return React.createElement("label", {
      className: `jsx-${styles.__hash}` + " " + (cx('base', className, {
        disabled: this.props.disabled
      }) || "")
    }, React.createElement("input", {
      type: "checkbox",
      onChange: this.onChange,
      checked: this.props.checked,
      disabled: this.props.disabled,
      className: `jsx-${styles.__hash}`
    }), icon, React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx('label', {
        required
      }) || "")
    }, this.props.label), icons.styles, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

Checkbox.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  indeterminate: propTypes.bool,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool
};
export { Checkbox };