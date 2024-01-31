import { lazy } from "react";

export const LoginPage = lazy(async () => await import("./login"));
export const MainPage = lazy(async () => await import("./main"));
export const RegisterPage = lazy(async () => await import("./register"));
