import { type FC, Suspense } from "react";
import "./styles/globals.css";
import { Providers } from "~/app/providers";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";

const App: FC = () => {
  return (
    <Providers>
      <Suspense fallback={"Loading..."}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  );
};

export default App;
