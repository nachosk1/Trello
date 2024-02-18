"use client";

import { createBoard } from "@/actions/create-board";

import FormInput from "./form-input";
import FormButton from "./form-button";
import { useAction } from "@/hooks/use-action";

export default function Form() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log("Board created", data);
    },
    onError: (error) => {
      console.error("Error creating board", error);
    },
  });

  const onSubmit = (formData) => {
    const title = formData.get("title");

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-x-2">
        <FormInput errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
}
