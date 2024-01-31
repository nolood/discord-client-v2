import { sum } from "./sum.ts";

test("adds sum func", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
  expect(sum(1, 4)).toBe(5);
  expect(sum(2, 5)).toBe(7);
  expect(sum(60, 60)).toBe(120);
});
