import { atom } from "~/shared/factory/atom";
import { createStore } from "effector";

export const userModel = atom(() => {
  const $isAuth = createStore(false);

  return {
    $isAuth,
  };
});
