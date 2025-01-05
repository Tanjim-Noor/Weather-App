import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setDate] = useState(true);

  useEffect(() => {
    const onSuccess = (e) => {
      setLoading(false);
      setError(null);
      setDate(e.coords);
    };

    const onError = (e) => {
      setLoading(false);
      setError(e);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return {loading, error, data}
}
