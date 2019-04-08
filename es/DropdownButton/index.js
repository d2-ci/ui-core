function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import { ArrowUp, ArrowDown } from '../icons/Arrow.js';
import buttons from '../Button/styles.js';
import styles from './styles.js';
const ArrowIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "1039571365"
  }, "svg.jsx-1039571365{fill:inherit;height:24px;width:24px;vertical-align:middle;pointer-events:none;}"),
  className: "jsx-1039571365"
};

class DropdownButton extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
    });

    _defineProperty(this, "onDocClick", evt => {
      if (this.elContainer && !this.elContainer.contains(evt.target)) {
        this.setState({
          open: false
        });
      }
    });

    _defineProperty(this, "onToggle", () => this.setState({
      open: !this.state.open
    }));
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  render() {
    const {
      open
    } = this.state;
    const icon = open ? React.createElement(ArrowUp, {
      className: ArrowIcon.className
    }) : React.createElement(ArrowDown, {
      className: ArrowIcon.className
    });
    return React.createElement("div", {
      ref: c => this.elContainer = c,
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}`
    }, React.createElement("button", {
      disabled: this.props.disabled,
      onClick: this.onToggle,
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + (cx('base', `kind-${this.props.kind}`, `size-${this.props.size}`, this.props.className, {
        'icon-only': this.props.icon && !this.props.label && !this.props.children,
        icon: this.props.icon
      }) || "")
    }, this.props.icon && React.createElement("span", {
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + "button-icon"
    }, this.props.icon), this.props.label || this.props.children, icon), open && React.createElement("div", {
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + "menu"
    }, this.props.component && this.props.component), ArrowIcon.styles, React.createElement(_JSXStyle, {
      id: buttons.__hash
    }, buttons), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

DropdownButton.defaultProps = {
  size: 'medium',
  kind: 'basic',
  disabled: false
};
DropdownButton.propTypes = {
  className: PropTypes.string,
  component: PropTypes.element.isRequired,
  width: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
  children: PropTypes.string,
  kind: PropTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
export { DropdownButton };
export default DropdownButton;