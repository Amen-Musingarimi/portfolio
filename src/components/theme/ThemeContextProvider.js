import { createContext, useContext } from 'react';
import { createTheme } from '@mui/material';
import { ColorTheme } from './ColorTheme';

export const ThemeContext = createContext({
  mode: 'light',
  toggleColorMode: () => {},
  theme: createTheme(),
});

export function ThemeContextProvider({ children }) {
  const value = ColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
