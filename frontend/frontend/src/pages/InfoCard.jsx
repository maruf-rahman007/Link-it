import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const InfoCard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/auth",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              'Content-Type': 'application/json'
            },
          }
        );

        if (response.data.success) {
          const username = response.data.user.username;
          navigate(`/:${username}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  return <div></div>;
};
