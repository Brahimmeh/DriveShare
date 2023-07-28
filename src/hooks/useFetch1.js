//path fetch
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch1 = (url) => {
  const [data1, setdata1] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [error1, setError1] = useState(false);

  useEffect(() => {
    const fetchdata1 = async () => {
      setLoading1(true);
      try {
        const res = await axios.get(url);
        setdata1(res.data);
      } catch (err) {
        setError1(err);
      }
      setLoading1(false);
    };
    fetchdata1();
  }, [url]);

  const reFetch = async () => {
    setLoading1(true);
    try {
      const res = await axios.get(url);
      setdata1(res.data);
    } catch (err) {
      setError1(err);
    }
    setLoading1(false);
  };

  return { data1, loading1, error1, reFetch };
};

export default useFetch1;