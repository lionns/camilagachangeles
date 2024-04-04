// import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { PropsWithChildren, createContext, useContext, useMemo } from "react";

const AuthContext = createContext<any>(null);

type AuthProviderProps = PropsWithChildren;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userJWT, setUserJWT] = useLocalStorage("jwt-token", null);

  const login = async (email: string, password: string): Promise<string> => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });
      const result = await response.json();
      if (result.error) {
        throw new Error("Las credenciales proporcionadas son incorrectas.");
      } else {
        setUserJWT(result.token);
        return "ok";
      }
    } catch (e: any) {
      return e.message;
    }
  };

  const logout = () => {
    setUserJWT(null);
  };

  const value = useMemo(() => ({ userJWT, login, logout }), [userJWT]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
