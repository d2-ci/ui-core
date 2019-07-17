import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { instanceOfComponent, mutuallyExclusive } from '@dhis2/prop-types';
import { Button } from '../Button';
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

const alignmentPropType = mutuallyExclusive(['start', 'middle', 'end'], propTypes.bool);
ButtonStrip.propTypes = {
  className: propTypes.string,
  children: propTypes.arrayOf(instanceOfComponent(Button)),
  compact: propTypes.bool,
  start: alignmentPropType,
  middle: alignmentPropType,
  end: alignmentPropType
};
export { ButtonStrip };