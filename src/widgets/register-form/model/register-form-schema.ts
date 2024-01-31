import { z } from "zod";

export const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters long" })
      .max(20, { message: "Username must be at most 20 characters long" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(20, {
        message: "Password must be at most 20 characters long",
      }),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });
