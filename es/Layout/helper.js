import { Children } from 'react';
import { LayoutTopBar } from './LayoutTopBar';
import { LayoutSidebar } from './LayoutSidebar';

const childrenContainsComponent = component => children => Children.toArray(children).reduce((found, child) => found || child.type === component, false);

const childrenContainsTopBar = childrenContainsComponent(LayoutTopBar);
const childrenContainsSidebar = childrenContainsComponent(LayoutSidebar);