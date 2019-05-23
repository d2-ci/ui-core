function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React, { Component, createRef } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme.js';
import styles from './styles.js';
import { Checked, Unchecked } from '../icons/Radio.js';
const icons = {
  styles: React.createElement(_JSXStyle, {
    id: "931218017"
  }, [`svg.jsx-931218017{height:24px;width:24px;fill:${theme.default};}`, ".focus.jsx-931218017 path{stroke:#646464;stroke-width:2px;}", `.checked.jsx-931218017{fill:${colors.teal400};}`, `.disabled.jsx-931218017{fill:${theme.disabled};}`, `.error.jsx-931218017{fill:${theme.error};}`, `.valid.jsx-931218017{fill:${theme.valid};}`, `.warning.jsx-931218017{fill:${theme.warning};}`]),
  className: "jsx-931218017"
};

class Radio extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "ref", createRef());

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

    this.state = {
      focus: props.focus
    };
  }

  componentDidMount() {
    if (this.props.focus) {
      this.ref.current.focus();
    }
  }

  render() {
    const {
      onChange,
      name,
      value,
      className,
      label,
      required,
      checked = false,
      disabled,
      valid,
      warning,
      error,
      autocomplete,
      autofocus,
      readonly,
      tabIndex,
      focus = this.state.focus
    } = this.props;
    const classes = cx(icons.className, {
      checked: checked && !valid && !error && !warning,
      disabled,
      valid,
      error,
      warning,
      focus
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
      ref: this.ref,
      type: "radio",
      name: name,
      value: value,
      focus: focus,
      checked: checked,
      disabled: disabled,
      autocomplete: autocomplete,
      autofocus: autofocus,
      tabIndex: tabIndex,
      readonly: readonly,
      onChange: onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      className: `jsx-${styles.__hash}`
    }), icon, React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx({
        required
      }) || "")
    }, label), icons.styles, React.createElement(_JSXStyle, {
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
  autocomplete: propTypes.string,
  tabIndex: propTypes.string,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool,
  autofocus: propTypes.bool,
  readonly: propTypes.bool
};
Radio.defaultProps = {
  tabIndex: '0'
};
export { Radio };