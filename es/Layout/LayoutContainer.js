import React from 'react';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
import { childrenContainsSidebar, childrenContainsTopBar } from './helper';
import { ContainerV1 } from './container/ContainerV1';
import { ContainerV2 } from './container/ContainerV2';
import { ContainerV3 } from './container/ContainerV3';
import { ContainerV4 } from './container/ContainerV4';

const LayoutContainer = ({
  children
}) => {
  const withSidebar = childrenContainsSidebar(children);
  const withTopBar = childrenContainsTopBar(children);

  if (withSidebar && withTopBar) {
    return React.createElement(ContainerV4, {
      children: children
    });
  }

  if (withSidebar) {
    return React.createElement(ContainerV3, {
      children: children
    });
  }

  if (withTopBar) {
    return React.createElement(ContainerV2, {
      children: children
    });
  }

  return React.createElement(ContainerV1, {
    children: children
  });
};

export { LayoutContainer };