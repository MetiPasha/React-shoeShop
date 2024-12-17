import { useEffect, useState } from "react";

export function useApi<T>(fn: () => Promise<T>) {
  const [state, setState] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fn()
      .then((data) => {
        setState(data);
      })
      .catch(() => {
        setError("Error fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fn]);

  return {
    data: state,
    isLoading: loading,
    isError: error,
  };
}
