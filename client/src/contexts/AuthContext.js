import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLogedin, setIsLogedin] = useState(false);
  const [userInfo, setUserInfo] = useState(null)
  const updateLoginStatus = (status) => {
    setIsLogedin(status)
  }
  const Logout = () => {
    setIsLogedin(false)
    setUserInfo(null)
  }
  return (
    <AuthContext.Provider value={{ isLogedin, updateLoginStatus,userInfo,setUserInfo,Logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;