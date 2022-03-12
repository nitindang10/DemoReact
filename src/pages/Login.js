import React from "react";
import { LoginList } from "../helpers/LoginList";
import LoginItem from "../components/LoginItem";
import "../styles/Login.css";

function Login() {
  return (
    <div className="menu">
      {/* <h1 className="menuTitle">Services</h1> */}
      <div className="menuList">
        {LoginList.map((loginItem, key) => {
          return (
            <LoginItem
              key={key}
              image={loginItem.image}
              name={loginItem.name}
              // button={loginItem.button}
              // price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Login;
