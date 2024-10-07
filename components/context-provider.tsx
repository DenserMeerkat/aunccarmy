"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

interface AppState {
  user: string;
  setUser: (user: string) => void;
}

export const AppStateContext = createContext<AppState | undefined>(undefined);

interface AppStateProviderProps {
  children: ReactNode;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState("");

  const state: AppState = {
    user,
    setUser,
  };

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
};
