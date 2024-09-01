import React, { createContext, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const storedUser = localStorage.getItem('userToken');
    return storedUser ? JSON.parse(storedUser) : { user: null };
  });

  const location = useLocation()

  const isAuthPage = location.pathname === "/auth";

  return (
    <AppContext.Provider value={{ state, setState }}>
      {!isAuthPage &&
        <Header />
      }
      <div className="content">
        {children}
      </div>
      {!isAuthPage &&
      <Footer />
      }
    </AppContext.Provider>
  );
}

export default AppProvider
