import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { colors } from '../theme.js';
import { createIcon } from '../icons/helpers';
import { iconStatusPropType, iconStatuses, statusToIcon } from '../icons/constants';
import { inputKinds, inputSizes } from '../forms/constants';
import { Input } from './InputField/Input';
import { Label } from './InputField/Label';
import { Fieldset } from './InputField/Fieldset';
import { Field } from './InputField/Field';
import { TrailIcon } from './InputField/TrailIcon';
import Help from '../Help';
import styles from './styles.js';
const types = {
  TEXT: 'text',
  EMAIL: 'email',
  NUMBER: 'number',
  PASSWORD: 'password',
  URL: 'url'
};

class InputField extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      focused: false
    });

    _defineProperty(this, "onFocus", evt => {
      this.setState({
        focused: true
      });
    });

    _defineProperty(this, "onBlur", evt => {
      this.setState({
        focused: false
      });
    });

    _defineProperty(this, "onChange", evt => {
      if (this.props.disabled) {
        return;
      }

      this.props.onChange(this.props.name, evt.target.value);
    });
  }

  componentDidMount() {
    this.setState({
      focused: this.props.focus
    });
  }

  isFocused() {
    return this.state.focused;
  }

  shouldShrink() {
    return !!(this.isFocused() || this.props.value || this.props.placeholder);
  }

  render() {
    const isFilled = this.props.kind === inputKinds.FILLED;
    const isDense = this.props.size === inputSizes.DENSE;
    return React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + _JSXStyle.dynamic([["2004200063", [colors.grey500]]]) + " " + (cx('base', this.props.className, {
        focused: this.isFocused(),
        disabled: this.props.disabled
      }) || "")
    }, React.createElement(_JSXStyle, {
      id: "2004200063",
      dynamic: [colors.grey500]
    }, `div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-webkit-input-placeholder{color:${colors.grey500};cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-moz-placeholder{color:${colors.grey500};cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled:-ms-input-placeholder{color:${colors.grey500};cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::placeholder{color:${colors.grey500};cursor:not-allowed;}`), React.createElement(Field, {
      value: this.props.value,
      size: this.props.size,
      status: this.props.status,
      kind: this.props.kind,
      isFocused: this.isFocused(),
      isFilled: isFilled,
      isDisabled: this.props.disabled
    }, React.createElement(Label, {
      status: this.props.status,
      size: this.props.size,
      kind: this.props.kind,
      isShrinked: this.shouldShrink(),
      isFocused: this.isFocused(),
      isDisabled: this.props.disabled,
      isRequired: this.props.required,
      hasValue: !!this.props.value,
      hasIcon: !!this.props.icon,
      className: this.props.styles.label,
      styles: this.props.styles.label,
      label: this.props.label || this.props.placeholder,
      hasValue: !!this.props.value,
      isFilled: isFilled
    }), createIcon(this.props.icon), React.createElement(Input, {
      type: this.props.type,
      value: this.props.value,
      isFocused: this.props.focus,
      disabled: this.props.disabled,
      isFilled: isFilled,
      isDense: isDense,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    }), React.createElement(TrailIcon, {
      status: this.props.status,
      trail: this.props.trailIcon
    })), this.props.help && React.createElement(Help, {
      text: this.props.help,
      status: this.props.status
    }), React.createElement(_JSXStyle, {
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
  styles: {}
};
InputField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  help: PropTypes.string,
  icon: PropTypes.element,
  trailIcon: PropTypes.element,
  status: iconStatusPropType,
  size: PropTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
  kind: PropTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),
  type: PropTypes.oneOf([types.TEXT, types.EMAIL, types.NUMBER, types.PASSWORD, types.URL]),
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  styles: PropTypes.shape({
    label: PropTypes.oneOf([PropTypes.string, PropTypes.object])
  })
};
export { InputField };
export default InputField;