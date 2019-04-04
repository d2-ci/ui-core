import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { ArrowUp, ArrowDown } from '../icons/Arrow';
import { Error, Valid, Warning, statusToIcon } from '../icons/Status';
import { colors, fonts } from '../theme';
import { createIcon } from '../icons/helpers';
import { iconStatusPropType, iconStatuses } from '../icons/constants';
import { inputKinds, inputSizes } from '../forms/constants';
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

function markActive(list, value) {
  if (!value) {
    return list;
  }

  return list.slice(0).map(item => {
    item.active = item.value && item.value === value;

    if (Array.isArray(item.list)) {
      item.list = markActive(item.list, value);
    }

    return item;
  });
}

var _ref =
/*#__PURE__*/
React.createElement(ArrowUp, null);

var _ref2 =
/*#__PURE__*/
React.createElement(ArrowDown, null);

class SelectField extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      open: false,
      labelWidth: 0
    });

    _defineProperty(this, "onDocClick", evt => {
      if (this.elContainer && this.elMenu) {
        const target = {
          x: evt.clientX,
          y: evt.clientY
        };
        const menu = this.elMenu.getBoundingClientRect();
        const container = this.elContainer.getBoundingClientRect();

        if (!isPointInRect(target, menu) && !isPointInRect(target, container)) {
          this.setState({
            open: false
          });
        }
      }
    });

    _defineProperty(this, "onToggle", () => {
      if (this.props.disabled) {
        return false;
      }

      this.setState({
        open: !this.state.open
      });
    });

    _defineProperty(this, "onClick", value => {
      if (this.props.disabled) {
        return false;
      }

      this.setState({
        open: false
      });
      this.props.onChange(this.props.name, value);
    });

    this.labelRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
    this.setState({
      labelWidth: this.labelRef.current.offsetWidth
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  getLabel() {
    if (!this.props.value) {
      return false;
    }

    const selected = this.props.list.filter(({
      value
    }) => this.props.value === value);
    return selected.length > 0 ? selected[0]['label'] : null;
  }

  isFocused() {
    return this.state.focused;
  }

  shrink() {
    return !!(this.isFocused() || this.props.value || this.props.placeholder);
  }

  render() {
    const {
      open
    } = this.state;
    const selected = this.getLabel();
    const list = markActive(this.props.list, this.props.value);
    const legendWidth = this.shrink() ? {
      width: `${this.state.labelWidth}px`
    } : {
      width: '0.01px'
    };
    const width = open && this.elSelect ? `${this.elSelect.getBoundingClientRect().width}px` : 'inherit';
    const Arrow = open ? _ref : _ref2;
    return React.createElement("div", {
      ref: c => this.elContainer = c,
      className: `jsx-${styles.__hash}` + " " + (cx('base', this.props.className, {
        selected: !!this.props.value,
        disabled: this.props.disabled,
        [`size-${this.props.size}`]: true
      }) || "")
    }, React.createElement("div", {
      ref: c => this.elSelect = c,
      onClick: this.onToggle,
      className: `jsx-${styles.__hash}` + " " + (cx('select', {
        [`kind-${this.props.kind}`]: true,
        [`status-${this.props.status}`]: true,
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
        shrink: !!selected
      }) || "")
    }, this.props.label), this.props.kind === 'outlined' && React.createElement("fieldset", {
      className: `jsx-${styles.__hash}` + " " + (cx('flatline', {
        [`${this.props.status}`]: true,
        focused: this.isFocused(),
        idle: !this.isFocused(),
        filled: this.state.text
      }) || "")
    }, React.createElement("legend", {
      style: legendWidth,
      className: `jsx-${styles.__hash}` + " " + "legend"
    }, React.createElement("span", {
      className: `jsx-${styles.__hash}`
    }, "\u200B"))), this.props.icon && React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "lead-icon-field"
    }, this.props.icon), React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('input-field', {
        disabled: this.props.disabled
      }) || "")
    }, React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "value"
    }, selected)), React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "trail-icon-field"
    }, this.props.status !== iconStatuses.DEFAULT && createTrailIcon(this.props.status)), React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('trail-icon-field', {
        disabled: this.props.disabled
      }) || "")
    }, Arrow)), this.props.help && React.createElement(Help, {
      text: this.props.help,
      status: this.props.status
    }), open && React.createElement("div", {
      ref: c => this.elMenu = c,
      className: `jsx-${styles.__hash}` + " " + "menu"
    }, React.createElement(Menu, {
      list: list,
      size: this.props.size,
      onClick: this.onClick,
      className: menuOverride.className
    })), React.createElement("style", null, menuOverride.styles), React.createElement("style", null, arrowIcon.styles), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles), React.createElement("style", null, selectIconStyles.styles));
  }

}

SelectField.defaultProps = {
  size: inputSizes.DEFAULT,
  kind: inputKinds.FILLED,
  status: iconStatuses.DEFAULT,
  help: '',
  className: '',
  disabled: false,
  required: false
};
SelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  })).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  help: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  icon: PropTypes.element,
  size: PropTypes.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]),
  kind: PropTypes.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]),
  status: iconStatusPropType
};
export { SelectField };
export default SelectField;