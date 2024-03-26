import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const AppContext = createContext();

export const UserProvider = ({ children }) => {
  const [cookies, setCookies, removeCookie] = useCookies();

  const login = async (formData) => {
    let res = await axios({
      method: 'POST',
      url: 'http://localhost:5000/api/auth',
      data: formData,
    });

    setCookies('token', res.data.token); // your token
  };

  const signUp = async (formData) => {
    let res = await axios({
      method: 'POST',
      url: 'http://localhost:5000/api/users',
      data: formData,
    });

    setCookies('token', res.data.token); // your token
  };

  const logout = () => {
    ['token'].forEach((obj) => removeCookie(obj)); // remove data save in cookies
  };

  const value = useMemo(
    () => ({
      cookies,
      login,
      logout,
      signUp,
    }),
    [cookies]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAuth = () => {
  return useContext(AppContext);
};
