import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React from 'react';
import { statusPropType } from '../common-prop-types';
import { LabelFilled, LabelOutlined } from '../FieldLabel';
import { ArrowDown } from '../icons/Arrow';
import { Select } from './Select';

var _ref =
/*#__PURE__*/
React.createElement(ArrowDown, null);

const TailIcon = () => React.createElement("div", {
  className: "jsx-3487810764"
}, _ref, React.createElement(_JSXStyle, {
  id: "3487810764"
}, ["div.jsx-3487810764{pointer-events:none;position:absolute;right:4px;}"]));

var _ref2 =
/*#__PURE__*/
React.createElement(TailIcon, null);

class SelectField extends React.Component {
  constructor(...args) {
    super(...args);

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

  isFocused() {
    return this.state.focus;
  }

  render() {
    const {
      filled,
      dense,
      required,
      label,
      disabled,
      name,
      valid,
      error,
      warning,
      loading,
      children,
      value,
      tabIndex,
      onChange
    } = this.props;
    const {
      focus
    } = this.state;
    const Container = filled ? LabelFilled : LabelOutlined;
    return React.createElement(Container, {
      focus: focus,
      label: label,
      value: !!value,
      htmlFor: name,
      required: required,
      disabled: disabled,
      valid: valid,
      warning: warning,
      error: error,
      loading: loading,
      dense: dense
    }, React.createElement(Select, {
      focus: focus,
      name: name,
      value: value,
      disabled: disabled,
      filled: filled,
      dense: dense,
      tabIndex: tabIndex,
      onChange: onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, children), _ref2);
  }

}

SelectField.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string,
  className: propTypes.string,
  tabIndex: propTypes.string,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.shape({
    tagName: propTypes.oneOf(['OPTION', 'OPTGROUP'])
  })), propTypes.shape({
    tagName: propTypes.oneOf(['OPTION', 'OPTGROUP'])
  })]),
  required: propTypes.bool,
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool,
  valid: statusPropType,
  warning: statusPropType,
  error: statusPropType,
  loading: propTypes.bool,
  initialFocus: propTypes.bool,
  onFocus: propTypes.func,
  onBlur: propTypes.func
};
export { SelectField };