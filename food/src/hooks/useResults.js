import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "chicago",
        },
      });
      setResults(response.data.businesses);
      setErrMessage("");
      setSearched(true);
    } catch (err) {
      setErrMessage("Something went wrong");
    }
  };

  // Call searchApi when
  // component is first rendered
  // BAD CODE!
  //   searchApi('chicago');
  // INSTEAD
  useEffect(() => {
    searchApi("chicago");
  }, []); // can this once

  return [searchApi, results, searched, errMessage];
};
