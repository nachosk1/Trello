"use client";

import { createBoard } from "@/actions/create-board";


import { useAction } from "@/hooks/use-action";
import FormInput from "@/components/form/form-input";
import FormSubmit from "@/components/form/form-submit";

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
        <FormInput
          id="title"
          errors={fieldErrors}
          label="Título del tablero"
        />
      </div>
      <FormSubmit 
        
      >Guardar</FormSubmit>
    </form>
  );
}
