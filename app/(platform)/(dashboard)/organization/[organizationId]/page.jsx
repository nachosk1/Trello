import { db } from "@/lib/db";
import Board from "./board";
import Form from "./form";

export default async function OrganizationIdPage() {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} board={board} />
        ))}
      </div>
    </div>
  );
}
