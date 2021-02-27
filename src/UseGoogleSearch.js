import React, { useEffect, useState } from "react";
// import axios from "axios";

const context_key = "3b4d2bf401cba80a4";
const api_key = "AIzaSyAtk-o3fs4BkMS-E9bkNLnHAqcF45YFSdY";

const UseGoogleSearch = (term) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${context_key}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        })
        .catch((err) => console.log(err.message));
    };

    fetchData();
  }, [term]);
  return { data };
};

export default UseGoogleSearch;
