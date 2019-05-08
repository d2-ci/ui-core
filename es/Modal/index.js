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
  return createPortal(React.createElement("div", {
    className: "jsx-1520348043" + " " + (cx({
      open
    }) || "")
  }, React.createElement(ScreenCover, {
    onClick: onClose
  }), React.createElement(ModalCard, {
    small: small,
    large: large
  }, children), React.createElement(_JSXStyle, {
    id: "1520348043"
  }, ["div.jsx-1520348043{display:none;height:100%;left:0;position:fixed;top:0;width:100%;z-index:99999999;}", ".open.jsx-1520348043{display:block;}"])), document.body);
};
Modal.Title = Title;
Modal.Content = Content;
Modal.Actions = Actions;
Modal.propTypes = {
  // Can contain Modal.Title; Must contain Modal.Content and Modal.Actions
  children: propTypes.arrayOf(propTypes.element).isRequired,
  // Callback used when clicking on the screen cover
  onClose: propTypes.func,
  open: propTypes.bool,
  small: propTypes.bool,
  large: propTypes.bool
};