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

export const loginDefaultValues = {
  id: "",
  password: "",
};

export const accountFormSchema = z.object({
  name: z.string().email({ message: "이름을 입력해주세요." }),
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  nickname: z.string().min(2, { message: "닉네임을 입력해주세요." }),
  sex: z.number().int().min(1).max(2),
});

export const accountDefaultValues = (user: {
  name: string;
  email: string;
  nickname: string;
  sex: number;
}) => {
  return {
    name: user.name ? user.name : "",
    email: user.email ? user.email : "",
    nickname: user.nickname ? user.nickname : "",
    sex: user.sex ? user.sex : 1,
  };
};

export const myPagePasswordChangeFormSchema = z.object({
  password: passwordSchema,
  newPassword: passwordSchema,
  newPasswordConfirm: passwordSchema,
});
