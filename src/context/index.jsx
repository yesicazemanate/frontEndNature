import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [idUser, setIdUser] = useState("Hola desde el contexto");

  return (
    <MyContext.Provider value={{ idUser, setIdUser }}>
      {children}
    </MyContext.Provider>
  );
};