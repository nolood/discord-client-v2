import { atom } from "~/shared/factory/atom/atom.ts";

test("factory atom", () => {
  expect(atom(() => 1)).toBe(1);
  expect(atom(() => 2)).toBe(2);
  expect(atom(() => ({ a: 1 }))).toEqual({ a: 1 });
});
