import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, ProtectedLayout } from "~/shared/ui";
import { LoginPage, MainPage, RegisterPage } from "~/pages";
import { paths } from "~/shared/constants/paths.ts";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: paths.login,
        element: <LoginPage />,
      },
      {
        path: paths.register,
        element: <RegisterPage />,
      },
    ],
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
