function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors } from '../theme.js';
import styles from './styles.js';
import { Cancel } from '../icons/Cancel.js';
const removeIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "1693149603"
  }, `svg.jsx-1693149603{margin-right:4px;color:${colors.grey700};height:18px;width:18px;cursor:pointer;opacity:1;pointer-events:all;}svg.jsx-1693149603:hover{opacity:0.82;}`),
  className: "jsx-1693149603"
};

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "3458732931"
}, "span.jsx-3458732931{width:24px;height:24px;margin-left:4px;border-radius:50%;overflow:hidden;}");

class Chip extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onClick", () => {
      if (!this.props.disabled && this.props.onClick) {
        return this.props.onClick();
      }
    });

    _defineProperty(this, "onRemove", evt => {
      evt.stopPropagation(); // stop onRemove from triggering onClick on container

      this.props.onRemove();
    });
  }

  showIcon() {
    const {
      icon
    } = this.props;

    if (!icon) {
      return;
    }

    return React.createElement(React.Fragment, null, React.createElement("span", {
      className: "jsx-3458732931"
    }, icon), _ref);
  }

  showRemove() {
    if (this.props.onRemove) {
      return React.createElement(React.Fragment, null, React.createElement(Cancel, {
        className: removeIcon.className,
        onClick: this.onRemove
      }), removeIcon.styles);
    }
  }

  render() {
    const {
      selected,
      disabled,
      dragging,
      overflow,
      className,
      children
    } = this.props;
    return React.createElement("div", {
      onClick: this.onClick,
      className: `jsx-${styles.__hash}` + " " + (cx(className, {
        selected,
        disabled,
        dragging,
        static: !this.props.onClick
      }) || "")
    }, this.showIcon(), React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx({
        overflow
      }) || "")
    }, children), this.showRemove(), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

Chip.propTypes = {
  children: propTypes.string.isRequired,
  className: propTypes.string,
  icon: propTypes.element,
  onClick: propTypes.func,
  onRemove: propTypes.func,
  selected: propTypes.bool,
  disabled: propTypes.bool,
  dragging: propTypes.bool,
  overflow: propTypes.bool
};
export { Chip };