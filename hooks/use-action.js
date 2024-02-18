import { useState, useCallback } from "react";

import { ActionState, FieldErrors } from "@/lib/create-safe-action";

export const useAction = (action, options) => {
  const [fieldErrors, setFieldErrors] = useState({});

  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(
    async (input) => {
      setIsLoading(true);

      try {
        const result = await action(input);
        if (!result) {
          return;
        }

        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
          return;
        }

        if (result.error) {
          setError(result.error);
          options.onError?.(result.error);
          return;
        }

        if (result.data) {
          setData(result.data);
          options.onSuccess?.(result.data);
        }
      } finally {
        setIsLoading(false);
        options.onComplete?.();
      }
    },
    [action, options]
  );

  return {
    execute,
    fieldErrors,
    error,
    data,
    isLoading,
  };
};
