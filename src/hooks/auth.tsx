import React, { createContext, useContext, useState, ReactNode } from "react";

import { api } from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  driver_license: string;
  avatar: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState({} as AuthState);

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post("/sessions", { email, password });

    const { token, user } = response.data;
    api.defaults.headers["authorization"] = `Bearer ${token}`;
    setData({ token, user });
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
