import { createContext, useContext, useMemo } from 'react';
import { productsData } from '../data/productsData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const value = useMemo(
    () => ({
      companyName: 'Hercules Life Sciences',
      featuredProducts: productsData.slice(0, 3)
    }),
    []
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }

  return context;
}
