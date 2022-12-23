import { api, baseURL } from "../api";
import { createContext, ReactElement, useContext, useState, useMemo } from "react";
import router from "next/router";
import axios from "axios";

export interface UserTypes {
  UserName: string;
  Email: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
}

export interface RegisterTypes {
  Email: string;
  Password: string;
  UserName: string;
}

export interface LoginTypes {
  Email: string;
  Password: string;
  Remember: boolean;
}
export interface AuthTypes {
  status: string;
  user: UserTypes | null;
}

export interface AuthContextTypes {
  auth: AuthTypes;
  logout: () => void;
  register: (data: RegisterTypes) => void;
  login: (data: LoginTypes) => void;
  setAuth: (data: AuthTypes) => void
}

export const AuthContext = createContext<AuthContextTypes | null>(null);
const parseCookie = (str: string) =>
  str
    ?.split(";")
    ?.map((v) => v.split("="))
    ?.reduce(
      (
        acc: {
          [index: string]: string;
        },
        v
      ) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      },
      {}
    );

export const getUser = async (context: any) => {
  const cookies = parseCookie(context.ctx.req?.headers?.cookie) || {};
  if (cookies["x-access-token"] && cookies["x-refresh-token"]) {
    return await axios
      .get('/user/checkAuth', {
        baseURL: baseURL,
        timeout: 5000,
        headers: {
          "x-access-token": cookies["x-access-token"],
          "x-refresh-token": cookies["x-refresh-token"],
        },
      })
      .then((response) => {
        console.log(response.data)
        if (response.data) {
          return { status: "SIGNED_IN", user: response.data.data };
        } else {
          return { status: "SIGNED_OUT", user: null };
        }
      })
      .catch((error) => {
        return { status: "SIGNED_OUT", user: null };
      });
  }
  return { status: "SIGNED_OUT", user: null };
};
export const AuthProvider = (props: {
  myAuth: AuthTypes;
  children: ReactElement;
}) => {
  const [auth, setAuth] = useState(props.myAuth || { status: "SIGNED_OUT", user: null })

  const login = async (data: LoginTypes) => {
    await api
      .post("user/login", data)
      .then((res) => {
        setAuth({ status: 'SIGNED_IN', user: res.data.data })
        router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const register = async (data: RegisterTypes) => {
    await api
      .post("user/signup", data)
      .then((res) => {
        setAuth({ status: 'SIGNED_IN', user: res.data.data })
        router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = async () => {
    await api
      .get("user/logout")
      .then((res) => {
        setAuth({ status: 'SIGNED_OUT', user: null })
        localStorage.clear()
        document.cookie = 'x-access-token=;'
        document.cookie = 'x-refresh-token=;'
        router.push('/login')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const value = useMemo(
    () => ({ auth, setAuth, login, register, logout }), 
    [auth]
  );
  return (
    <AuthContext.Provider value={value} {...props}>
      {props.children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
export const AuthConsumer = AuthContext.Consumer;
