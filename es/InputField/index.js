function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import _JSXStyle from "styled-jsx/style";
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Valid, Warning, Error } from '../icons/Status.js';
import { colors } from '../theme.js';
import { inputFontSizeValue, heightDefault, heightDense } from '../forms/constants';
import { Input } from './InputField/Input';
import { Label } from './InputField/Label';
import { Fieldset } from './InputField/Fieldset';
import { Field } from './InputField/Field';
import Help from '../Help';
import styles from './styles.js';
const statusToIcon = {
  valid: React.createElement(Valid, null),
  warning: React.createElement(Warning, null),
  error: React.createElement(Error, null)
};
const icons = {
  default: {
    styles: React.createElement(_JSXStyle, {
      id: "3033330349"
    }, `svg.jsx-3033330349{fill:${colors.grey700};height:24px;width:24px;margin-right:8px;}`),
    className: "jsx-3033330349"
  },
  valid: {
    styles: React.createElement(_JSXStyle, {
      id: "3522955246"
    }, `svg.jsx-3522955246{fill:${colors.blue600};height:24px;width:24px;margin-right:8px;}`),
    className: "jsx-3522955246"
  },
  warning: {
    styles: React.createElement(_JSXStyle, {
      id: "3520916525"
    }, `svg.jsx-3520916525{fill:${colors.yellow500};height:24px;width:24px;margin-right:8px;}`),
    className: "jsx-3520916525"
  },
  error: {
    styles: React.createElement(_JSXStyle, {
      id: "898494457"
    }, `svg.jsx-898494457{fill:${colors.red500};height:24px;width:24px;margin-right:8px;}`),
    className: "jsx-898494457"
  }
};

function icon(Icon, extra = 'default') {
  if (Icon) {
    return React.createElement(Fragment, null, React.createElement(Icon.type, _extends({}, Icon.props, {
      className: icons[extra].className
    })), icons[extra].styles);
  }

  return null;
}

function TrailIcon({
  status,
  trail
}) {
  if (status !== 'default') {
    return icon(statusToIcon[status], status);
  } else {
    return trail;
  }
}

TrailIcon.propTypes = {
  status: PropTypes.string,
  fn: PropTypes.func
};
TrailIcon.defaultProps = {
  trail: ''
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

  shrink() {
    return !!(this.isFocused() || this.props.value || this.props.placeholder);
  }

  render() {
    return React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + _JSXStyle.dynamic([["3717134333", [colors.grey500]]]) + " " + (cx('base', this.props.className, {
        focused: this.isFocused(),
        disabled: this.props.disabled
      }) || "")
    }, React.createElement(_JSXStyle, {
      id: "3717134333",
      dynamic: [colors.grey500]
    }, `div.__jsx-style-dynamic-selector global(.disabled).__jsx-style-dynamic-selector,div.__jsx-style-dynamic-selector global(.disabled.__jsx-style-dynamic-selector::-webkit-input-placeholder){color:${colors.grey500};cursor:not-allowed;}div.__jsx-style-dynamic-selector global(.disabled).__jsx-style-dynamic-selector,div.__jsx-style-dynamic-selector global(.disabled.__jsx-style-dynamic-selector::-moz-placeholder){color:${colors.grey500};cursor:not-allowed;}div.__jsx-style-dynamic-selector global(.disabled).__jsx-style-dynamic-selector,div.__jsx-style-dynamic-selector global(.disabled.__jsx-style-dynamic-selector:-ms-input-placeholder){color:${colors.grey500};cursor:not-allowed;}div.__jsx-style-dynamic-selector global(.disabled).__jsx-style-dynamic-selector,div.__jsx-style-dynamic-selector global(.disabled.__jsx-style-dynamic-selector::placeholder){color:${colors.grey500};cursor:not-allowed;}`), React.createElement(Field, {
      value: this.props.value,
      size: this.props.size,
      status: this.props.status,
      kind: this.props.kind,
      isFocused: this.isFocused(),
      isFilled: this.props.kind === 'filled',
      isDisabled: this.props.disabled
    }, React.createElement(Fieldset, {
      kind: this.props.kind,
      status: this.props.status,
      isFocused: this.isFocused(),
      hasValue: !!this.props.value
    }), React.createElement(Label, {
      status: this.props.status,
      size: this.props.size,
      kind: this.props.kind,
      isShrinked: this.shrink(),
      isFocused: this.isFocused(),
      isDisabled: this.props.disabled,
      isRequired: this.props.required,
      hasIcon: !!this.props.icon,
      className: this.props.styles.label,
      styles: this.props.styles.label,
      label: this.props.label
    }), icon(this.props.icon), React.createElement(Input, {
      type: this.props.type,
      value: this.props.value,
      placeholder: this.props.placeholder,
      isFocused: this.props.focus,
      disabled: this.props.disabled,
      filled: this.props.kind === 'filled',
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
  status: 'default',
  size: 'default',
  kind: 'filled',
  type: 'text',
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
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
  size: PropTypes.oneOf(['default', 'dense']),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  styles: PropTypes.shape({
    label: PropTypes.oneOf([PropTypes.string, PropTypes.object])
  })
};
export { InputField };
export default InputField;