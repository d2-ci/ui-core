import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles';

function LinearProgress({
  amount,
  margin,
  className
}) {
  const type = typeof amount === 'undefined' ? cx('indeterminate') : cx('determinate');
  const style = amount ? {
    width: `${amount}%`
  } : null;
  return React.createElement("div", {
    role: "progressbar",
    style: {
      margin
    },
    className: `jsx-${styles.__hash}` + " " + (cx('base', className) || "")
  }, React.createElement("div", {
    style: style,
    className: `jsx-${styles.__hash}` + " " + (cx('progress', type) || "")
  }), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
}

LinearProgress.propTypes = {
  className: propTypes.string,
  amount: propTypes.number,
  margin: propTypes.oneOfType([propTypes.string, propTypes.number])
};
export { LinearProgress };
export default LinearProgress;