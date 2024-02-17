"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const { db } = require("@/lib/db");

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "El minimo de caracteres es 3",
  }),
});

export async function create(prevState, formData) {
  const validateFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Campos faltantes",
    };
  }

  const { title } = validateFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Database error",
    };
  }

  revalidatePath("/organization/org_2c02lFNQTGQLlHaQRvj2V6twKEB");
  redirect("/organization/org_2c02lFNQTGQLlHaQRvj2V6twKEB");
}
