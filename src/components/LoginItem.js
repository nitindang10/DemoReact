import { Button } from "reactstrap";
import React from "react";


function LoginItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <div className="center">
      <button href="/src/pages/Contact.js" className="btn" name="login">Login</button>
    </div>
    </div>
  );
}

export default LoginItem;
