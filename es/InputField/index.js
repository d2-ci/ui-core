import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { Input } from './InputField/Input';
import { LabelFilled } from '../forms/LabelFilled';
import { LabelOutlined } from '../forms/LabelOutlined';
import { colors } from '../theme';
import { iconStatusPropType, iconStatuses } from '../icons/constants';
import { inputKinds, inputSizes } from '../forms/constants';
import Help from '../Help';
const styles = new String(`.base.jsx-3338623497{display:inline-block;width:100%;color:${colors.grey700};}`);
styles.__hash = "3338623497";
const types = {
  TEXT: 'text',
  EMAIL: 'email',
  NUMBER: 'number',
  PASSWORD: 'password',
  URL: 'url'
};

class InputField extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      focused: false
    });

    _defineProperty(this, "onFocus", evt => {
      this.setState({
        focused: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(evt);
      }
    });

    _defineProperty(this, "onBlur", evt => {
      this.setState({
        focused: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(evt);
      }
    });

    _defineProperty(this, "onChange", evt => {
      if (this.props.disabled) {
        return;
      }

      this.props.onChange(this.props.name, evt.target.value);
    });

    this.state = {
      focused: props.focus
    };
  }

  isFocused() {
    return this.state.focused;
  }

  render() {
    const isFilled = this.props.kind === inputKinds.FILLED;
    const isDense = this.props.size === inputSizes.DENSE;
    const Container = this.props.kind === inputKinds.FILLED ? LabelFilled : LabelOutlined;
    return React.createElement("div", {
      onClick: this.onFocus,
      className: `jsx-${styles.__hash}` + " " + _JSXStyle.dynamic([["2004200063", [colors.grey500]]]) + " " + (cx('base', this.props.className, {
        disabled: this.props.disabled
      }) || "")
    }, React.createElement(Container, {
      label: this.props.label,
      isFocused: this.state.focused,
      hasValue: !!this.props.value || this.props.placeholder,
      htmlFor: this.props.name,
      required: this.props.required,
      disabled: this.props.disabled,
      status: this.props.status,
      size: this.props.size,
      className: `jsx-${styles.__hash}` + " " + _JSXStyle.dynamic([["2004200063", [colors.grey500]]])
    }, React.createElement(Input, {
      name: this.props.name,
      type: this.props.type,
      kind: this.props.kind,
      value: this.props.value,
      placeholder: this.props.placeholder,
      isFocused: this.state.focused,
      disabled: this.props.disabled,
      isFilled: isFilled,
      isDense: isDense,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    })), this.props.help && React.createElement(Help, {
      text: this.props.help,
      status: this.props.status
    }), React.createElement(_JSXStyle, {
      id: "2004200063",
      dynamic: [colors.grey500]
    }, `div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-webkit-input-placeholder{color:${colors.grey500};cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-moz-placeholder{color:${colors.grey500};cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled:-ms-input-placeholder{color:${colors.grey500};cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::placeholder{color:${colors.grey500};cursor:not-allowed;}`), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

InputField.defaultProps = {
  status: iconStatuses.DEFAULT,
  size: inputSizes.DEFAULT,
  kind: inputKinds.FILLED,
  type: types.TEXT,
  focus: false,
  disabled: false,
  required: false,
  placeholder: ''
};
InputField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  help: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  focus: PropTypes.bool,
  status: iconStatusPropType,
  size: PropTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
  kind: PropTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([types.TEXT, types.EMAIL, types.NUMBER, types.PASSWORD, types.URL])
};
export { InputField };
export default InputField;