import { deleteBoard } from "@/actions/delete-board";
import FormDelete from "./form-delete";

export default function Board({ board }) {
  const { id, title } = board;

  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  );
}
