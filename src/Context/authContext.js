import { createContext, useState } from "react";
const values = { isAuth: false };
export const IsAuthContext = createContext();
const IsAuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(values);
  const contextData = {
    user: isAuth,
    setTrue: () => setIsAuth(true),
    setFalse: () => setIsAuth(false),
  };
  return (
    <IsAuthContext.Provider value={contextData}>
      {children}
    </IsAuthContext.Provider>
  );
};
export default IsAuthProvider;
