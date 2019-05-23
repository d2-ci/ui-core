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
  start,
  middle,
  end
}) => React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (cx(className, {
    compact,
    start,
    middle,
    end
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));

ButtonStrip.propTypes = {
  className: propTypes.string,
  children: buttonArrayPropType.isRequired,
  compact: propTypes.bool,
  start: propTypes.bool,
  middle: propTypes.bool,
  end: propTypes.bool
};
ButtonStrip.defaultProps = {
  start: true
};
export { ButtonStrip };