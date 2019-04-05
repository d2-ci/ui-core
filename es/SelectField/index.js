import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { Error, Valid, Warning, statusToIcon } from '../icons/Status';
import { Input } from '../InputField/InputField/Input';
import { LabelFilled } from '../forms/LabelFilled';
import { LabelOutlined } from '../forms/LabelOutlined';
import { Select } from './SelectField/Select';
import { Arrow } from './SelectField/Arrow';
import { colors, fonts } from '../theme';
import { createIcon } from '../icons/helpers';
import { iconStatusPropType, iconStatuses } from '../icons/constants';
import { innerSpacingSides, inputKinds, inputSizes } from '../forms/constants';
import { isPointInRect } from '../utils/math';
import Help from '../Help';
import Menu from '../Menu';
import styles, { menuOverride, selectIconStyles } from './styles';

function createTrailIcon(status, trail, fn) {
  const icon = status !== iconStatuses.DEFAULT ? statusToIcon[status] : trail;
  const options = {
    action: fn,
    className: selectIconStyles.className
  };
  return createIcon(icon, options);
}

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "1546415887"
}, ".select-value.jsx-1546415887{display:block;overflow:hidden;padding-right:10px;text-overflow:ellipsis;white-space:nowrap;}");

class SelectField extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "elContainer", React.createRef());

    _defineProperty(this, "state", {
      focused: false,
      open: false
    });

    _defineProperty(this, "onDocClick", evt => {
      if (this.focused && this.elContainer) {
        const target = {
          x: evt.clientX,
          y: evt.clientY
        };
        const container = this.elContainer.getBoundingClientRect();

        if (!isPointInRect(target, container)) {
          this.setState({
            focused: false,
            open: false
          });
        }
      }
    });

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
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  isFocused() {
    return this.state.focused;
  }

  shrink() {
    return !!(this.isFocused() || this.props.value);
  }

  render() {
    const {
      open
    } = this.state;
    const isFilled = this.props.kind === inputKinds.FILLED;
    const isDense = this.props.size === inputSizes.DENSE;
    const Container = this.props.kind === inputKinds.FILLED ? LabelFilled : LabelOutlined;
    return React.createElement("div", {
      ref: c => this.elContainer = c,
      className: "jsx-1546415887 " + `jsx-${styles.__hash}` + " " + (cx('base', this.props.className, {
        selected: !!this.props.value,
        disabled: this.props.disabled,
        [`size-${this.props.size}`]: true
      }) || "")
    }, React.createElement(Container, {
      label: this.props.label,
      isFocused: this.state.focused,
      hasValue: true,
      htmlFor: this.props.name,
      required: this.props.required,
      status: this.props.status,
      size: this.props.size,
      tailIcon: () => React.createElement(Arrow, {
        open: this.state.open
      }),
      onClick: this.onFocus,
      className: "jsx-1546415887 " + `jsx-${styles.__hash}`
    }, React.createElement(Select, {
      value: this.props.value,
      disabled: this.props.disabled,
      list: this.props.list,
      kind: this.props.kind,
      size: this.props.size,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    })), this.props.help && React.createElement(Help, {
      text: this.props.help,
      status: this.props.status
    }), React.createElement("style", null, menuOverride.styles), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles), React.createElement("style", null, selectIconStyles.styles), _ref);
  }

}

SelectField.defaultProps = {
  size: inputSizes.DEFAULT,
  kind: inputKinds.FILLED,
  status: iconStatuses.DEFAULT,
  help: '',
  className: '',
  disabled: false,
  required: false,
  onFocus: null,
  onBlur: null
};
SelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  list: Select.propTypes.list,
  help: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
  kind: PropTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),
  status: iconStatusPropType,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
export { SelectField };
export default SelectField;