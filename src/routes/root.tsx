import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Landing } from "./Landing";
import { ErrorPage } from "../error-page";
import { Login } from "./Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Landing />} errorElement={<ErrorPage />}>
      <Route path="login" element={<Login />} />
      <Route path="logout" />
    </Route>
  )
);
