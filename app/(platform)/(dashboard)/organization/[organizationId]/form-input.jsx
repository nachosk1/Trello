import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

export default function FormInput({ errors }) {
  const { pending } = useFormStatus();
  return (
    <>
      <Input
        id="title"
        name="title"
        required
        placeholder="Ingresa el título del evento"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors?.title?.map((error) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
}
