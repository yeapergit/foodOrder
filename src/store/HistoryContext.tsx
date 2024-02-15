import React, { ReactNode, createContext, useContext, useState } from 'react';

interface HistoryContextType {
  names: Array<string>,
  hideHistory: () => void
  showHistory: (items: string[]) => void
}

const historyContextObject = {
  names: [],
  hideHistory: () => { },
  showHistory: () => { }
}

const HistoryContext = createContext<HistoryContextType>(historyContextObject)

export const HistoryContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orderIds, setItems] = useState<Array<string>>([]);

  const showHistory = (items: any[]) => {
    if (items) {
      const itemsIds = items.map(x => { return x.id })
      setItems(itemsIds);
      console.log({ orderIds })
    }
  }

  function hideHistory(){
    console.log("hide")
  }

  const historyContext: HistoryContextType = {
    names: [],
    hideHistory,
    showHistory
  }

  return (
    <HistoryContext.Provider value={historyContext}>
      {children}
    </HistoryContext.Provider>
  )
}

export default HistoryContext;