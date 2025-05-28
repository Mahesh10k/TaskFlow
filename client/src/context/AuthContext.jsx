import { createContext, useState} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const res = await axios.post("/api/auth/login", credentials);
    setUser(res.data.user);
  };

  const register = async (userData) => {
    const res = await axios.post("/api/auth/register", userData);
    setUser(res.data.user);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
