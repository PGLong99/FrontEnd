import { createContext, useState } from "react";
type values = {
  isAuth?: boolean;
  setTrue?: any;
  setFalse?: any;
};
export const AuthContext = createContext<values>({});
interface props {
  children: any;
}
export const AuthProvider = ({ children }: props) => {
  const [isAuth, setAuth] = useState(false);
  const contextData = {
    isAuth: isAuth,
    setTrue: () => {
      setAuth(true);
    },
    setFalse: () => {
      setAuth(false);
    },
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
