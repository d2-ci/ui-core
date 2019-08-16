import React, { createContext } from 'react';
export const TableContext = createContext({
  headerLabels: []
});
export const {
  Provider,
  Consumer
} = TableContext;