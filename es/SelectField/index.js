import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { Arrow } from './Arrow';
import { LabelFilled, LabelOutlined } from '../FieldLabel';
import { Select } from './Select';
import { colors } from '../theme';
import { iconStatusPropType, iconStatuses } from '../icons/constants';
import { inputKinds, inputSizes } from '../forms/constants';
import Help from '../Help';
const styles = new String(`.base.jsx-2528058342{display:inline-block;position:relative;width:100%;background-color:inherit;color:${colors.grey700};pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.disabled.jsx-2528058342{cursor:not-allowed;opacity:1;}`);
styles.__hash = "2528058342";

class SelectField extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "elContainer", React.createRef());

    _defineProperty(this, "onDocClick", evt => {
      if (this.elContainer && !this.elContainer.contains(evt.target)) {
        this.setState({
          focused: false,
          show: false
        });
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

    this.state = {
      focused: props.focused,
      open: false
    };
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
      className: `jsx-${styles.__hash}` + " " + (cx('base', this.props.className, {
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
      disabled: this.props.disabled,
      status: this.props.status,
      size: this.props.size,
      tailIcon: () => React.createElement(Arrow, {
        open: this.state.open
      }),
      onClick: this.onFocus,
      className: `jsx-${styles.__hash}`
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
    }), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
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
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  list: Select.propTypes.list,
  help: propTypes.string,
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
export default SelectField;