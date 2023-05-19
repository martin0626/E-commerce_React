import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../Store/ui-slice";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.setLoading());
    const fetchData = async () => {
      let request = await fetch(url);

      let response = await request.json();
      setData(response);
      dispatch(uiActions.clearUi());
    };

    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;
