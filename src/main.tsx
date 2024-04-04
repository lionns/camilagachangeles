import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { Landing } from "./routes/Landing";
import { Login } from "./routes/Login";
import { ErrorPage } from "./error-page";
import { Admin } from "./routes/Admin";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Profile } from "./routes/Profile";

const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
  { path: "/", element: <Landing />, errorElement: <ErrorPage /> },
  { path: "/inicio-de-sesion", element: <Login /> },
  {
    path: "/admin",
    element: (
      <ProtectedRoute adminRoute={true}>
        <Admin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/perfil",
    element: (
      <ProtectedRoute adminRoute={false}>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
