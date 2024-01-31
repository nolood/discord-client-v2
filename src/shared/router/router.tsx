import { createBrowserRouter } from "react-router-dom";
import { ProtectedLayout } from "~/shared/ui";
import { LoginPage, MainPage, RegisterPage } from "~/pages";
import { paths } from "~/shared/router/paths.ts";

export const router = createBrowserRouter([
  {
    path: paths.login,
    element: <LoginPage />,
  },
  {
    path: paths.register,
    element: <RegisterPage />,
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: paths.main,
        element: <MainPage />,
      },
    ],
  },
]);
