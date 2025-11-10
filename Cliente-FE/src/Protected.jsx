// src/Protected.jsx
import { useEffect, useState } from "react";
import API from "./api";

const Protected = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/protected");
        setMessage(response.data.message);
      } catch (err) {
        setMessage("Error: not authorized or server error");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return <h1>{message}</h1>;
};

export default Protected;
