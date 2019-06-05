import _JSXStyle from "styled-jsx/style";
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles';

class AlertBar extends PureComponent {
  render() {
    const {
      className,
      children
    } = this.props;
    return React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx(className) || "")
    }, children, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

AlertBar.propTypes = {
  children: propTypes.string.isRequired,
  success: propTypes.bool,
  warning: propTypes.bool,
  critical: propTypes.bool,
  icon: propTypes.bool,
  duration: propTypes.number,
  actions: propTypes.any
};
AlertBar.defaultProps = {
  icon: false,
  duration: 5000
};
export { AlertBar };