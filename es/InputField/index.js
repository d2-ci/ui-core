import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { Default, Error, Valid, Warning } from '../icons/Status.js';
import { colors } from '../theme.js';
import { createIcon } from '../icons/helpers';
import { iconStatusPropType, iconStatuses, statusToIcon } from '../icons/constants';
import { inputKinds, inputSizes } from '../forms/constants';
import Help from '../Help';
import styles from './styles.js';
const types = {
  TEXT: 'text',
  EMAIL: 'email',
  NUMBER: 'number',
  PASSWORD: 'password',
  URL: 'url'
};

function createTrailIcon(status, trail, fn) {
  return status !== 'default' ? createIcon(statusToIcon[status], {
    action: fn
  }) : trail;
}

class InputField extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      focused: false,
      labelWidth: 0
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

    this.labelRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      labelWidth: this.labelRef.current.offsetWidth,
      focused: this.props.focus
    });

    if (this.props.focus) {
      this.inputRef.current.focus();
    }
  }

  isFocused() {
    return this.state.focused;
  }

  shrink() {
    return !!(this.isFocused() || this.props.value || this.props.placeholder);
  }

  render() {
    const legendWidth = this.shrink() ? {
      width: `${this.state.labelWidth}px`
    } : {
      width: '0.01px'
    };
    return React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('base', this.props.className, {
        focused: this.isFocused(),
        disabled: this.props.disabled
      }) || "")
    }, React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('field', {
        [`size-${this.props.size}`]: true,
        [`status-${this.props.status}`]: true,
        [`kind-${this.props.kind}`]: true,
        focused: this.isFocused(),
        filled: this.props.value,
        disabled: this.props.disabled
      }) || "")
    }, React.createElement("label", {
      ref: this.labelRef,
      className: `jsx-${styles.__hash}` + " " + (cx('label', {
        [`${this.props.status}`]: true,
        [`${this.props.size}`]: true,
        [`${this.props.kind}`]: true,
        'has-icon': !!this.props.icon,
        required: this.props.required,
        disabled: this.props.disabled,
        focused: this.isFocused(),
        shrink: this.shrink()
      }) || "")
    }, this.props.label), this.props.kind === 'outlined' && React.createElement("fieldset", {
      className: `jsx-${styles.__hash}` + " " + (cx('flatline', {
        [`${this.props.status}`]: true,
        focused: this.isFocused(),
        idle: !this.isFocused(),
        filled: this.props.value
      }) || "")
    }, React.createElement("legend", {
      style: legendWidth,
      className: `jsx-${styles.__hash}` + " " + "legend"
    }, React.createElement("span", {
      className: `jsx-${styles.__hash}`
    }, "\u200B"))), createIcon(this.props.icon), React.createElement("input", {
      ref: this.inputRef,
      type: this.props.type,
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      value: this.props.value,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange,
      className: `jsx-${styles.__hash}` + " " + (cx({
        disabled: this.props.disabled
      }) || "")
    }), createTrailIcon(this.props.status, this.props.trailIcon)), this.props.help && React.createElement(Help, {
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
  required: false
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
  required: PropTypes.bool
};
export { InputField, types, iconStatuses, inputSizes, inputKinds };
export default InputField;