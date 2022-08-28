import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { api } from "../services/api";
import { database } from "../database";
import { User as UserModel } from "../database/model/user";

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
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  updateUser(user: User): Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState({} as AuthState);
  const [loading, setLoading] = useState(true);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;
      api.defaults.headers["authorization"] = `Bearer ${token}`;

      await database.write(async () => {
        await database.get("users").create((newUser: UserModel) => {
          newUser.user_id = user.id;
          newUser.name = user.name;
          newUser.email = user.email;
          newUser.driver_license = user.driver_licence;
          newUser.avatar = user.avatar;
          newUser.token = token;
        });
      });

      setData({ token, user });
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      await database.write(async () => {
        const currentUser = await database
          .get<UserModel>("users")
          .find(data.user.id);

        if (currentUser) {
          await currentUser.destroyPermanently();
        }
      });

      setData({} as AuthState);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function updateUser(user: User) {
    try {
      await database.write(async () => {
        const currentUser = await database
          .get<UserModel>("users")
          .find(data.user.id);

        await currentUser.update((current: UserModel) => {
          current.name = user.name;
          current.driver_license = user.driver_license;
          current.avatar = user.avatar;
        });
      });

      setData((old) => ({ ...old, user }));
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadUser() {
      const users = await database.get("users").query().fetch();
      if (users.length > 0) {
        const { token, ...user } = users[0]._raw as unknown as UserModel;
        api.defaults.headers["authorization"] = `Bearer ${token}`;
        setData({ user, token });
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
