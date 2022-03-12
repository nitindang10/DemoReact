import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
 <div className="menu">
<div className="menuItem">
     
      <h1> Login as Customer </h1>
      <Button as={Link} to="/contact" variant="text">Get Started </Button>
    </div>
    </div>
    <div className="menu">
<div className="menuItem">
     
      <h1> Login as Transporter </h1> 
     
    </div>
    </div>  



    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      >
        {/* //leftside */}
        
        </div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        {/* <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form> */}
      </div>
      </div>
    </div>
  );
}

export default Contact;
