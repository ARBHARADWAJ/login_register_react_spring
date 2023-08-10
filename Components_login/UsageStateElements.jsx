import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

export const Sharedstate = createContext();

export const ShareStateprovider = ({ children }) => {
  const [islogged, setIslogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handlelogIn = () => {
    setIslogged(true);
  };
  const handleEmail = (newemail) => {
    setEmail(newemail);
  };
  const handlePassword = (password) => {
    setPassword(password);
  };
  const handleLogout = () => {
    console.log("logout clicked");
    setIslogged(false)
    setEmail("")
    setPassword("")
    
   
  };

  
  return (
    <Sharedstate.Provider
      value={{
        islogged,
        email,
        password,
        handleEmail,
        handleLogout,
        handlePassword,
        handlelogIn,
        
      }}
    >
      {children}
    </Sharedstate.Provider>
  );
};
