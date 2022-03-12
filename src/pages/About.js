import React from "react";
import MultiplePizzas from "../assets/vabout2.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        A veterinary doctor is animal healthcare professional. 
        Animals do get hurt and get injured in road accidents or become a victim of violence.
         The doctors who treat humans provide medications and surgical care to human illnesses,
          diseases and disorders cannot treat the animals in the same way. The internal organs of 
          animals and their functioning vary. Therefore, we have specialised animal doctors known as
           veterinary doctors. If you love animals and want to treat their illnesses, injuries
            and diseases, then you must opt for a career as a vet doctor. In a layman’s language,
             he or she is known as a pet doctor. A veterinary doctor not only treats domesticated 
             animals but also treats other wild animals including stray animals. Aspiring candidates
              who want to become a Veterinarian are required to enrol in a vet science course.
        </p>
      </div>
    </div>
  );
}

export default About;
