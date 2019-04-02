import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { Content } from './Fieldset/Content';
import { Label } from './Fieldset/Label';
import { borderRadius, inputHeight, inputHeightDense } from './constants';
import { children } from '../utils/react';
import { colors } from '../theme';
import { iconStatusPropType, iconStatuses, statusColors } from '../icons/constants';
import { innerSpacingSides, inputSizes, inputSizesPropTypes } from '../forms/constants';
const styles = new String(`.fieldset.jsx-2291090312{padding-top:10px;height:${inputHeight}px;position:relative;}.fieldset.jsx-2291090312:before{border:1px solid ${statusColors[iconStatuses.DEFAULT]};border-top:0;border-radius:0 0 ${borderRadius} ${borderRadius};box-sizing:border-box;bottom:0;content:'';height:75%;left:0;position:absolute;width:100%;}.fieldset.valid.jsx-2291090312:before{border-color:${statusColors[iconStatuses.VALID]};}.fieldset.warning.jsx-2291090312:before{border-color:${statusColors[iconStatuses.WARNING]};}.fieldset.error.jsx-2291090312:before{border-color:${statusColors[iconStatuses.ERROR]};}.fieldset.dense.jsx-2291090312{height:34px;}`);
styles.__hash = "2291090312";

const createFieldsetClassName = props => cx('fieldset', {
  focused: props.isFocused,
  dense: props.size === inputSizes.DENSE,
  valid: props.status === iconStatuses.VALID,
  warning: props.status === iconStatuses.WARNING,
  error: props.status === iconStatuses.ERROR
});

export const Fieldset = props => {
  return React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (createFieldsetClassName(props) || "")
  }, React.createElement(Label, {
    size: props.size,
    status: props.status,
    hasValue: props.hasValue,
    label: props.label,
    htmlFor: props.htmlFor
  }), React.createElement(Content, {
    size: props.size
  }, props.children), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
Fieldset.propTypes = {
  label: PropTypes.string.isRequired,
  children: children.isRequired,
  hasValue: PropTypes.bool.isRequired,
  status: iconStatusPropType,
  size: inputSizesPropTypes,
  htmlFor: PropTypes.string
};
Fieldset.defaultProps = {
  status: iconStatuses.DEFAULT,
  size: inputSizes.DEFAULT,
  htmlFor: ''
};
export default Fieldset;