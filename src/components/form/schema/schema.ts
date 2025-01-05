import { idRegex, passwordRegex } from "@/lib/regex";
import { z } from "zod";

export const idSchema = z.string().regex(idRegex, {
  message: "올바른 아이디를 입력해주세요.",
});

export const passwordSchema = z
  .string()
  .min(6, { message: "비밀번호를 입력해주세요." })
  .regex(passwordRegex, {
    message:
      "비밀번호는 대문자, 소문자, 숫자, 특수문자를 최소 하나씩 포함해야 합니다.",
  });

export const loginFormSchema = z.object({
  id: idSchema,
  password: passwordSchema,
});
