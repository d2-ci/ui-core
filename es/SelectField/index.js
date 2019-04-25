import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import { ArrowDown } from '../icons/Arrow';
import { LabelFilled, LabelOutlined } from '../FieldLabel';
import { Select } from './Select';
import { colors } from '../theme';
import { iconStatusPropType, iconStatuses } from '../icons/constants';
import { inputKinds, inputSizes } from '../forms/constants';

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
    const isFilled = this.props.kind === inputKinds.FILLED;
    const isDense = this.props.size === inputSizes.DENSE;
    const Container = this.props.kind === inputKinds.FILLED ? LabelFilled : LabelOutlined;
    return React.createElement(Container, {
      label: this.props.label,
      isFocused: this.isFocused(),
      hasValue: true,
      htmlFor: this.props.name,
      required: this.props.required,
      disabled: this.props.disabled,
      status: this.props.status,
      size: this.props.size,
      onClick: this.onFocus
    }, React.createElement(Select, {
      value: this.props.value,
      disabled: this.props.disabled,
      list: this.props.list,
      kind: this.props.kind,
      size: this.props.size,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }), _ref2);
  }

}

SelectField.defaultProps = {
  size: inputSizes.DEFAULT,
  kind: inputKinds.FILLED,
  status: iconStatuses.DEFAULT,
  className: '',
  disabled: false,
  required: false
};
SelectField.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  list: Select.propTypes.list,
  className: propTypes.string,
  disabled: propTypes.bool,
  required: propTypes.bool,
  focus: propTypes.bool,
  size: propTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
  kind: propTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),
  status: iconStatusPropType,
  onFocus: propTypes.func,
  onBlur: propTypes.func
};
export { SelectField };