import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import propTypes from 'prop-types';
import React from 'react';
import { Card } from '../Card';
import { sizePropType } from '../common-prop-types';
import { spacers } from '../theme.js';
const cardBoxStyle = {
  styles: React.createElement(_JSXStyle, {
    id: "3900320195"
  }, [`.modal-card.jsx-3900320195{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:auto;max-height:95vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;left:50%;max-width:calc(100vw - ${2 * spacers.dp24}px);max-height:calc(100vh - ${2 * spacers.dp24}px);position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:600px;}`, ".small.jsx-3900320195{width:400px;}", ".large.jsx-3900320195{width:800px;}"]),
  className: "jsx-3900320195"
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
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)]).isRequired,
  small: sizePropType,
  large: sizePropType
};