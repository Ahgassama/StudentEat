import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./header.scss";
//Header de la page d'accueil
const Header = () => {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("Users"));

  const config = {
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/users/${
          JSON.parse(localStorage.getItem("Users")).userId
        }`,
        config
      );
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <header className="header-home">
      <div className="logo">
        <img src="./images/logo.jpg" alt="img-logo" />
      </div>
      <div className="welcomePage">Bonjour {data.surname}!</div>
    </header>
  );
};

export default Header;
