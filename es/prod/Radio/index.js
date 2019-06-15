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
    id: "1822073958"
  }, [`svg.jsx-1822073958{display:block;height:24px;width:24px;fill:${theme.default};}`, `.focus.jsx-1822073958{fill:${colors.grey800};}`, `.checked.jsx-1822073958{fill:${colors.teal400};}`, `.disabled.jsx-1822073958{fill:${theme.disabled};}`, `.error.jsx-1822073958{fill:${theme.error};}`, `.valid.jsx-1822073958{fill:${theme.valid};}`, `.warning.jsx-1822073958{fill:${theme.warning};}`]),
  className: "jsx-1822073958"
};
const Input = React.forwardRef(({
  name,
  value,
  checked,
  disabled,
  tabIndex,
  onChange,
  onFocus,
  onBlur
}, ref) => React.createElement("div", {
  className: "jsx-1102028186"
}, React.createElement("input", {
  type: "radio",
  ref: ref,
  name: name,
  value: value,
  checked: checked,
  disabled: disabled,
  tabIndex: tabIndex,
  onChange: onChange,
  onFocus: onFocus,
  onBlur: onBlur,
  className: "jsx-1102028186"
}), React.createElement(_JSXStyle, {
  id: "1102028186"
}, ["div.jsx-1102028186{height:0;width:0;overflow:hidden;}"])));

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
      focus: props.initialFocus
    };
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
      value,
      className,
      label,
      required,
      checked = false,
      disabled,
      valid,
      warning,
      error,
      tabIndex
    } = this.props;
    const {
      focus
    } = this.state;
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
      className: `jsx-${styles.__hash}` + " " + _JSXStyle.dynamic([["1090951208", [colors.blue600]]]) + " " + (cx(className, {
        disabled
      }) || "")
    }, React.createElement(Input, {
      ref: this.ref,
      name: name,
      value: value,
      checked: checked,
      disabled: disabled,
      tabIndex: tabIndex,
      onChange: onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }), React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + _JSXStyle.dynamic([["1090951208", [colors.blue600]]]) + " " + (cx({
        focus
      }) || "")
    }, icon), React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + _JSXStyle.dynamic([["1090951208", [colors.blue600]]]) + " " + (cx({
        required
      }) || "")
    }, label), icons.styles, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles), React.createElement(_JSXStyle, {
      id: "1090951208",
      dynamic: [colors.blue600]
    }, ["div.__jsx-style-dynamic-selector{position:relative;}", `.focus.__jsx-style-dynamic-selector:before{content:'';position:absolute;border:2px solid ${colors.blue600};border-radius:50%;width:calc(100% + 2px);height:calc(100% + 2px);top:-1px;left:-1px;}`]));
  }

}

Radio.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  tabIndex: propTypes.string,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool,
  initialFocus: propTypes.bool
};
export { Radio };