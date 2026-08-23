import { useState, useEffect } from 'react';

export function useJsonFetch<T = unknown>(
  url: string,
  opts?: RequestInit
): [T | null, boolean, Error | null] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url, opts);

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Произошла неизвестная ошибка'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return [data, loading, error];
}

export default useJsonFetch;