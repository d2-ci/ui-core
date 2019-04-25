function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors } from '../theme.js';
import styles from './styles.js';
import { Checked, Unchecked } from '../icons/Radio.js';
import { Help } from '..';
const icons = {
  default: {
    styles: React.createElement(_JSXStyle, {
      id: "40145635"
    }, `svg.jsx-40145635{fill:${colors.grey600};height:24px;width:24px;}`),
    className: "jsx-40145635"
  },
  checked: {
    styles: React.createElement(_JSXStyle, {
      id: "3230514506"
    }, `svg.jsx-3230514506{fill:${colors.teal400};height:24px;width:24px;}`),
    className: "jsx-3230514506"
  },
  valid: {
    styles: React.createElement(_JSXStyle, {
      id: "1378458444"
    }, `svg.jsx-1378458444{fill:${colors.blue600};height:24px;width:24px;}`),
    className: "jsx-1378458444"
  },
  warning: {
    styles: React.createElement(_JSXStyle, {
      id: "3220898470"
    }, `svg.jsx-3220898470{fill:${colors.yellow500};height:24px;width:24px;}`),
    className: "jsx-3220898470"
  },
  error: {
    styles: React.createElement(_JSXStyle, {
      id: "2028575264"
    }, `svg.jsx-2028575264{fill:${colors.red500};height:24px;width:24px;}`),
    className: "jsx-2028575264"
  }
};

class Radio extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChange", () => this.props.onChange(this.props.name, this.props.value));
  }

  render() {
    const {
      required,
      status,
      checked,
      className
    } = this.props;
    const state = status === 'default' && checked ? 'checked' : status;
    const icon = this.props.checked ? React.createElement(Checked, {
      className: icons[state].className
    }) : React.createElement(Unchecked, {
      className: icons[state].className
    });
    return React.createElement("div", null, React.createElement("label", {
      className: `jsx-${styles.__hash}` + " " + (cx('base', className, {
        disabled: this.props.disabled
      }) || "")
    }, React.createElement("input", {
      type: "radio",
      name: this.props.name,
      value: this.props.value,
      checked: this.props.checked,
      disabled: this.props.disabled,
      onChange: this.onChange,
      className: `jsx-${styles.__hash}`
    }), icon, React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx('label', {
        required
      }) || "")
    }, this.props.label), icons[state].styles, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles)), this.props.help && React.createElement(Help, {
      text: this.props.help,
      status: this.props.status
    }));
  }

}

Radio.defaultProps = {
  checked: false,
  status: 'default',
  disabled: false
};
Radio.propTypes = {
  className: propTypes.string,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  label: propTypes.string,
  help: propTypes.string,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  status: propTypes.oneOf(['default', 'valid', 'warning', 'error'])
};
export { Radio };