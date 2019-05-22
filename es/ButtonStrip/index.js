import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { buttonArrayPropType } from './helper';
import styles from './styles';

const ButtonStrip = ({
  className,
  children,
  compact,
  alignEnd
}) => React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (cx(className, {
    compact,
    'align-end': alignEnd
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));

ButtonStrip.propTypes = {
  className: propTypes.string,
  children: buttonArrayPropType.isRequired,
  compact: propTypes.bool,
  alignEnd: propTypes.bool
};
export { ButtonStrip };