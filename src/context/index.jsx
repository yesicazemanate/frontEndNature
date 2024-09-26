import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [idUser, setIdUser] = useState();

  return (
    <MyContext.Provider value={{ idUser, setIdUser }}>
      {children}
    </MyContext.Provider>
  );
};