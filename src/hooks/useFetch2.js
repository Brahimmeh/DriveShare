//hotel fetch
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch2 = (url) => {
  const [data2, setdata2] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(false);

  useEffect(() => {
    const fetchdata2 = async () => {
      setLoading2(true);
      try {
        const res = await axios.get(url);
        setdata2(res.data);
      } catch (err) {
        setError2(err);
      }
      setLoading2(false);
    };
    fetchdata2();
  }, [url]);

  const reFetch = async () => {
    setLoading2(true);
    try {
      const res = await axios.get(url);
      setdata2(res.data);
    } catch (err) {
      setError2(err);
    }
    setLoading2(false);
  };

  return { data2, loading2, error2, reFetch };
};

export default useFetch2;