import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  fontSize: number;
  changeFontSize: (size: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(100);

  useEffect(() => {
    // Check for saved preferences
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = parseInt(localStorage.getItem('fontSize') || '100');
    
    setDarkMode(savedDarkMode);
    setHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    
    // Apply saved preferences
    if (savedDarkMode) document.documentElement.classList.add('dark');
    if (savedHighContrast) document.body.classList.add('high-contrast');
    if (savedFontSize !== 100) document.documentElement.style.fontSize = `${savedFontSize}%`;
  }, []);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  const toggleHighContrast = (): void => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', (!highContrast).toString());
  };

  const changeFontSize = (newSize: number): void => {
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    localStorage.setItem('fontSize', newSize.toString());
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        darkMode, 
        toggleDarkMode, 
        highContrast, 
        toggleHighContrast, 
        fontSize, 
        changeFontSize 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};