'use server'

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id) {
  await db.board.delete({
    where: {
      id,
    },
  });
  revalidatePath("/organization/org_2cP5pwuy82Kynq16W8aJGtaxh3W");
}
