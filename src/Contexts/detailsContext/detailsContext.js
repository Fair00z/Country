
import React, { createContext, useState } from 'react';

export const DetailsContext = createContext();


export const DetailsProvider = ({ children }) => {
  const [data, setData] = useState([]);

    return(
      <DetailsContext.Provider value={{ setData, data }}>
      {children}
    </DetailsContext.Provider>
    )
};
