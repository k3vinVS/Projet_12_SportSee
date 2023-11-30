import { useEffect, useState } from "react";

export function useFetch(url, id) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
    fetchData();
  }, [url, id]);
  return { data, error };
}
