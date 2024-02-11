import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [userName, setUserName_] = useState(localStorage.getItem("userName"))
  const [email, setEmail_] = useState(localStorage.getItem('email'))
  const [profile, setProfile_] = useState(localStorage.getItem('profile'))
  const [profileId, setProfileId_] = useState(localStorage.getItem('profileId'))


  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };

  const setUserName = (userName) =>{
    setUserName_(userName);
  }

  const setEmail = (email) =>{
    setEmail_(email);
  }

  const setProfile = (profile) =>{
    setProfile_(profile);
  }
  const setProfileId = (profileId) =>{
    setProfileId_(profileId);
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem('token',token);
      localStorage.setItem('userName', userName);
      localStorage.setItem('email', email);
      localStorage.setItem('profile', profile);
      localStorage.setItem('profileId', profileId);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token')
      localStorage.removeItem('userName', userName);
      localStorage.removeItem('email', email);
      localStorage.removeItem('profile', profile);
      localStorage.removeItem('profileId', profileId);
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      userName,
      setUserName,
      email,
      setEmail,
      profile,
      setProfile,
      profileId,
      setProfileId
    }),
    [token]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;