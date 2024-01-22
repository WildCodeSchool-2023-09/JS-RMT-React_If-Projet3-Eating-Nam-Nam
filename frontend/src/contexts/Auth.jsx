import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [connected, setConnected] = useState({ role: null });
  const [idNewUser, setIdNewUser] = useState({ id: 0 });
  const [infosUser, setInfosUser] = useState({ username: "" });
  const contextValue = useMemo(
    () => ({
      connected,
      setConnected,
      infosUser,
      setInfosUser,
      idNewUser,
      setIdNewUser,
    }),
    [connected, setConnected, infosUser, setInfosUser, idNewUser, setIdNewUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AuthProvider;
