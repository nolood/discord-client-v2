import { cn } from "./cn.ts";

test("tailwind merge + clsx (CN FUNC)", () => {
  expect(cn("test", "test2", "kek2")).toBe("test test2 kek2");
});
