"use client";

import { useFormStatus } from "react-dom";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FormErrors from "@/components/form/form-errors";
import { cn } from "@/lib/utils";

export default function FormInput({
  id,
  label,
  type,
  placeholder,
  required,
  disabled,
  errors,
  className,
  defaultValue,
  onBlur,
}) {
  const { pending } = useFormStatus();
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        {label ? (
          <Label
            htmlFor={id}
            className="text-sm font-semibold text-neutral-700"
          >
            {label}
          </Label>
        ) : null}

        <Input
          onBlur={onBlur}
          defaultValue={defaultValue}
          required={required}
          name={id}
          id={id}
          placeholder={placeholder}
          type={type}
          disabled={pending || disabled}
          className={cn("text-sm px-2 py-1 h-7", className)}
          aria-describedby={`${id}-error`}
        />
      </div>

      <FormErrors id={id} errors={errors} />
    </div>
  );
}
