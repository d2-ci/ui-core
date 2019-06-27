function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import propTypes from 'prop-types';
import { InnerTabBar } from './InnerTabBar';
import { TabBarScroller } from './TabBarScroller';

const TabBar = (_ref) => {
  let {
    fixed,
    isScrollingRequired,
    children
  } = _ref,
      tabBarScrollerProps = _objectWithoutProperties(_ref, ["fixed", "isScrollingRequired", "children"]);

  return fixed || !isScrollingRequired ? React.createElement(InnerTabBar, {
    fixed: fixed
  }, children) : React.createElement(TabBarScroller, tabBarScrollerProps, React.createElement(InnerTabBar, {
    fixed: fixed
  }, children));
};

TabBar.propTypes = {
  isScrollingRequired: propTypes.bool.isRequired,
  fixed: InnerTabBar.propTypes.fixed,
  children: propTypes.node.isRequired
};
export { TabBar };