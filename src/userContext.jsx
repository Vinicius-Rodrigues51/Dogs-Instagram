import React from "react";
import { TOKEN_POST, USER_GET } from "./api";

export const userContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();

    localStorage.setItem("token", token);
    getUser(token);
  }

  return (
    <userContext.Provider value={{ userLogin, data }}>
      {children}
    </userContext.Provider>
  );
};
