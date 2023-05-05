import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let request = await fetch(url);

      let response = await request.json();
      setData(response);
    };

    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;
