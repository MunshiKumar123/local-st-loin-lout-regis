import React from "react";

import { useHistory } from "react-router-dom";
import Product from "./Product";

const Main = (props) => {
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("loggedin");
    history.push("/");
  };

  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="container p-3 my-3 border">
        <button className="btn btn-primary" onClick={logOut}>
          LogOut
        </button>
        <p className="text-center">Your User Name: {userName.name}</p>
        <Product />
      </div>
    </>
  );
};

export default Main;
