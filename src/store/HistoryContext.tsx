import React, { ReactNode, createContext, useContext, useState } from 'react';

interface HistoryContextType {
  orderIds: Array<string>,
  names: Array<string>,
  hideHistory: () => void
  showHistory: () => void
}

const HistoryContext = createContext<HistoryContextType>({
  orderIds: [],
  names: [],
  hideHistory: () => {},
  showHistory: () => {}
})

  export const HistoryContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {

    const historyContext = {
      orderIds: [],
      names: [],
      hideHistory: () => {},
      showHistory: () => {}
    }

    return (
      <HistoryContext.Provider value={historyContext}>
        {children}
      </HistoryContext.Provider>
    )
  }