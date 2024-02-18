import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "El título es requerido",
      invalid_type_error: "El título debe ser un texto",
    })
    .min(3, {
      message: "El minimo de caracteres es 3",
    }),
});
