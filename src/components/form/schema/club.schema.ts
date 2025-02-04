import { z } from "zod";

export const clubNameSchema = z
  .string()
  .min(1, "클럽 이름은 필수입니다.")
  .max(50, "클럽 이름은 최대 50자까지 입력할 수 있습니다.");

export const clubDescSchema = z
  .string()
  .min(1, "클럽 설명은 필수입니다.")
  .max(255, "클럽 설명은 최대 255자까지 입력할 수 있습니다.");

export const clubImageSchema = z
  .instanceof(File, {
    message: "이미지는 필수이며 파일 형식이어야 합니다.",
  })
  .optional();

export interface ClubCreateFormInterface {
  name: string;
  description: string;
  image?: File | undefined;
}

export const clubCreateDefaultValues: ClubCreateFormInterface = {
  name: "",
  description: "",
  image: undefined,
};

export const clubCreateFormSchema = z.object({
  name: clubNameSchema,
  description: clubDescSchema,
  image: clubImageSchema,
});
