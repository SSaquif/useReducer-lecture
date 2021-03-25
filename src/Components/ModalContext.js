import { useState, useReducer, createContext } from "react";
export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [currentModal, setCurrentModal] = useState(null);

  return (
    <ModalContext.Provider
      value={{
        currentModal,
        setCurrentModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
