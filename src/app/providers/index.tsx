import { type FC, type ReactElement, type ReactNode } from "react";
import {
  type RenderOptions,
  render,
  type RenderResult,
} from "@testing-library/react";

import { ThemeProvider } from "./theme-provider";
export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): RenderResult => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender };
