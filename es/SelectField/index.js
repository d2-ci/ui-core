import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import { ArrowDown } from '../icons/Arrow';
import { LabelFilled, LabelOutlined } from '../FieldLabel';
import { Select } from './Select';
import { colors } from '../theme';

var _ref =
/*#__PURE__*/
React.createElement("div", {
  className: "jsx-3487810764"
}, React.createElement(ArrowDown, null), React.createElement(_JSXStyle, {
  id: "3487810764"
}, "div.jsx-3487810764{pointer-events:none;position:absolute;right:4px;}"));

const TailIcon = () => _ref;

var _ref2 =
/*#__PURE__*/
React.createElement(TailIcon, null);

class SelectField extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", event => {
      if (!this.props.disabled) {
        const {
          value
        } = event.target;
        this.props.onChange(this.props.name, value);
      }
    });

    _defineProperty(this, "onFocus", e => {
      this.setState({
        focused: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    });

    _defineProperty(this, "onBlur", e => {
      this.setState({
        focused: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    });

    this.state = {
      focused: props.focused
    };
  }

  isFocused() {
    return this.state.focused;
  }

  render() {
    const {
      type,
      list,
      filled,
      focus,
      dense,
      required,
      label,
      disabled,
      placeholder,
      value,
      name,
      valid,
      error,
      warning,
      loading
    } = this.props;
    const Container = filled ? LabelFilled : LabelOutlined;
    return React.createElement(Container, {
      onClick: this.onFocus,
      focus: this.state.focus,
      label: label,
      value: !!value || placeholder,
      htmlFor: name,
      required: required,
      disabled: disabled,
      valid: valid,
      warning: warning,
      error: error,
      loading: loading,
      dense: dense
    }, React.createElement(Select, {
      value: value,
      disabled: disabled,
      list: list,
      filled: filled,
      dense: dense,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }), _ref2);
  }

}

SelectField.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  list: Select.propTypes.list,
  className: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool,
  focus: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool,
  loading: propTypes.bool,
  onFocus: propTypes.func,
  onBlur: propTypes.func
};
export { SelectField };