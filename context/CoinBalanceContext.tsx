import React, { createContext, useContext, useState } from 'react';

interface CoinBalanceContextType {
  balance: number;
  addCoins: (amount: number) => void;
  removeCoins: (amount: number) => void;
}

const CoinBalanceContext = createContext<CoinBalanceContextType | undefined>(undefined);

export function CoinBalanceProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState(1000); // Start with 1000 coins

  const addCoins = (amount: number) => {
    setBalance(current => current + amount);
  };

  const removeCoins = (amount: number) => {
    setBalance(current => Math.max(0, current - amount));
  };

  return (
    <CoinBalanceContext.Provider value={{ balance, addCoins, removeCoins }}>
      {children}
    </CoinBalanceContext.Provider>
  );
}

export function useCoinBalance() {
  const context = useContext(CoinBalanceContext);
  if (context === undefined) {
    throw new Error('useCoinBalance must be used within a CoinBalanceProvider');
  }
  return context;
}
