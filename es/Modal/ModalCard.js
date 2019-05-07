import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Card } from '../Card';
const outerSpacing = 24;
const cardBoxStyle = {
  styles: React.createElement(_JSXStyle, {
    id: "2275384749"
  }, [`.modal-card.jsx-2275384749{height:auto;left:50%;max-width:calc(100vw - ${2 * outerSpacing}px);max-height:calc(100vh - ${2 * outerSpacing}px);position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}`, ".modal-card.scrollable.jsx-2275384749{height:100%;}", ".size-small.jsx-2275384749{width:400px;}", ".size-medium.jsx-2275384749{width:600px;}", ".size-large.jsx-2275384749{width:800px;}"]),
  className: "jsx-2275384749"
};
export const ModalCard = ({
  children,
  scrollable,
  size
}) => {
  console.log('scrollable', scrollable);
  return React.createElement(Card, {
    className: cx(cardBoxStyle.className, 'modal-card', `size-${size}`, {
      scrollable
    })
  }, React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, children), cardBoxStyle.styles);
};
ModalCard.propTypes = {
  // Can be Modal.Title; Must be Modal.Content and Modal.Actions
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  scrollable: PropTypes.bool
};
ModalCard.defaultProps = {
  size: 'small'
};