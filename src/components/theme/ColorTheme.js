import React, { useState, useMemo } from 'react';
import { createTheme } from '@mui/material';
import { getDesignTokens } from './Theme';

export const ColorTheme = () => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  const modifiedTheme = useMemo(() => createTheme(getDesignTokens(mode)), [
    mode,
  ]);

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
