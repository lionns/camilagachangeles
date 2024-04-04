import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { DecodeInfoProps } from "../types/DecodeInfoProps";

type ProtectedRouteProps = PropsWithChildren & {
  adminRoute: boolean;
};

export const ProtectedRoute = ({
  children,
  adminRoute,
}: ProtectedRouteProps) => {
  const { userJWT, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userJWT === null) {
      navigate("/inicio-de-sesion", { replace: true });
    }

    const decode: DecodeInfoProps = jwtDecode(userJWT);

    // Valida que el token no haya expirado
    const timestamp = decode.exp;
    const expDate = new Date(timestamp * 1000);
    const currentDate = new Date();
    
    if (expDate < currentDate) {
      logout();
      navigate("/inicio-de-sesion", { replace: true });
    }

    // Valida que si la ruta es admin y si tiene permisos
    if (adminRoute && adminRoute !== decode.isAdmin) {
      navigate("/", { replace: true });
    }
    
  }, [navigate, userJWT]);

  return children;
};
