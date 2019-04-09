import _JSXStyle from "styled-jsx/style";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { InputContainer } from './LabelOutlined/InputContainer';
import { Label } from './LabelOutlined/Label';
import { StatusIconNoDefault } from '../icons/Status';
import { borderRadius, inputHeight, inputHeightDense } from './LabelOutlined/constants';
import { children } from '../utils/react';
import { colors } from '../theme';
import { iconStatusPropType, iconStatuses, statusColors } from '../icons/constants';
import { innerSpacingSides, inputSizes, inputSizesPropTypes } from './constants';
const styles = new String(`.label-outlined.jsx-3173687768{height:${inputHeight + 10}px;position:relative;}.label-outlined.disabled.jsx-3173687768{cursor:not-allowed;}.label-outlined.dense.jsx-3173687768{height:${inputHeightDense + 10}px;}.label-outlined.jsx-3173687768:before{border:1px solid ${statusColors[iconStatuses.DEFAULT]};border-top:0;border-radius:0 0 ${borderRadius} ${borderRadius};box-sizing:border-box;bottom:0;content:'';height:75%;left:0;position:absolute;width:100%;}.label-outlined.valid.jsx-3173687768:before{border-color:${statusColors[iconStatuses.VALID]};}.label-outlined.warning.jsx-3173687768:before{border-color:${statusColors[iconStatuses.WARNING]};}.label-outlined.error.jsx-3173687768:before{border-color:${statusColors[iconStatuses.ERROR]};}.content.jsx-3173687768{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:54px;left:1px;position:relative;top:11px;width:calc(100% - 1px);}.dense.jsx-3173687768 .content.jsx-3173687768{height:42px;}.status-icon.jsx-3173687768{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;}.status-icon.jsx-3173687768:empty{display:none;}.status-icon.jsx-3173687768:last-child{margin-right:10px;}`);
styles.__hash = "3173687768";

const createLabelOutlinedClassName = props => cx('label-outlined', {
  focused: props.isFocused,
  dense: props.size === inputSizes.DENSE,
  valid: props.status === iconStatuses.VALID,
  warning: props.status === iconStatuses.WARNING,
  error: props.status === iconStatuses.ERROR,
  disabled: props.disabled
});

export const LabelOutlined = (_ref) => {
  let {
    tailIcon: TailIcon
  } = _ref,
      props = _objectWithoutProperties(_ref, ["tailIcon"]);

  return React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (createLabelOutlinedClassName(props) || "")
  }, React.createElement(Label, {
    size: props.size,
    status: props.status,
    hasValue: props.isFocused || props.hasValue,
    label: props.label,
    htmlFor: props.htmlFor,
    disabled: props.disabled
  }), React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content"
  }, React.createElement(InputContainer, {
    size: props.size
  }, props.children), React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "status-icon"
  }, React.createElement(StatusIconNoDefault, {
    status: props.status
  })), React.createElement(TailIcon, {
    className: `jsx-${styles.__hash}`
  })), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
LabelOutlined.propTypes = {
  label: PropTypes.string.isRequired,
  children: children.isRequired,
  hasValue: PropTypes.bool.isRequired,
  htmlFor: PropTypes.string.isRequired,
  tailIcon: PropTypes.element,
  required: PropTypes.bool,
  status: iconStatusPropType,
  size: inputSizesPropTypes
};
LabelOutlined.defaultProps = {
  status: iconStatuses.DEFAULT,
  size: inputSizes.DEFAULT,
  htmlFor: '',
  tailIcon: () => null
};
export default LabelOutlined;