import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import cx from 'classnames';
import { ScreenCover } from '../ScreenCover';
import { Actions } from './Actions';
import { Content } from './Content';
import { ModalCard } from './ModalCard';
import { Title } from './Title';
/**
 * Modal provides a UI to prompt the user to respond to a question
 * or a note to the user.
 *
 * Use Model with the following Components:
 * Model.Title (optional)
 * Model.Content (required)
 * Model.Actions (required)
 */

export const Modal = ({
  children,
  onClose,
  small,
  large,
  open
}) => {
  return createPortal(React.createElement("aside", {
    className: "jsx-1183424492" + " " + (cx({
      open
    }) || "")
  }, React.createElement(ScreenCover, {
    onClick: onClose
  }, React.createElement(ModalCard, {
    small: small,
    large: large
  }, children)), React.createElement(_JSXStyle, {
    id: "1183424492"
  }, ["aside.jsx-1183424492{display:none;}", ".open.jsx-1183424492{display:block;}"])), document.body);
};
Modal.Title = Title;
Modal.Content = Content;
Modal.Actions = Actions;
Modal.propTypes = {
  // Can contain Modal.Title; Must contain Modal.Content and Modal.Actions
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)]).isRequired,
  // Callback used when clicking on the screen cover
  onClose: propTypes.func,
  open: propTypes.bool,
  small: propTypes.bool,
  large: propTypes.bool
};