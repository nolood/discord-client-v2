import { createBrowserRouter } from "react-router-dom";
import { ProtectedLayout } from "~/shared/ui";
import { LoginPage, MainPage } from "~/pages";
import { paths } from "~/shared/router/paths.ts";

export const router = createBrowserRouter([
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: paths.main,
        element: <MainPage />,
      },
      {
        path: paths.login,
        element: <LoginPage />,
      },
    ],
  },
]);
