import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { Card } from '../Card';
const OUTER_SPACING = 24;
const cardBoxStyle = {
  styles: React.createElement(_JSXStyle, {
    id: "1375009442"
  }, [`.modal-card.jsx-1375009442{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;left:50%;max-width:calc(100vw - ${2 * OUTER_SPACING}px);max-height:calc(100vh - ${2 * OUTER_SPACING}px);position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:600px;}`, ".small.jsx-1375009442{width:400px;}", ".large.jsx-1375009442{width:800px;}"]),
  className: "jsx-1375009442"
};
export const ModalCard = ({
  children,
  small,
  large
}) => {
  return React.createElement(Card, {
    className: cx(cardBoxStyle.className, 'modal-card', {
      small,
      large
    })
  }, children, cardBoxStyle.styles);
};
ModalCard.propTypes = {
  // Can be Modal.Title; Must be Modal.Content and Modal.Actions
  children: propTypes.arrayOf(propTypes.element).isRequired,
  small: propTypes.bool,
  large: propTypes.bool
};