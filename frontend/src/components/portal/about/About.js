import React from "react";
import Layout from "../layout/index";
import './About.css';


const AboutComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      
        <div className="about-section">
  <h1>About Us</h1>

</div>
<br />
<h2>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
          <img src={require('./image2.jpeg')} alt="Mike" />
      <div className="container">
      <br />
        <h2>Joseph Nathan</h2>
        <p className="title">CEO & Founder</p>
        <p>Having previously worked on various travel companies, Joseph decided to use his knowledge in the domain to make a website to make the process simpler and cheaper.</p>
        <p></p>
        <p align="center"><button className="button"><a href="mailto:ceo@Travlr.com">Contact</a></button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
    <img src={require('./image1.jpeg')} alt="Mike" />
      <div className="container">
        <br />
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Mike Ross breathes art. A person who is deep rooted in psychology and business, he knows the value of art to mankind and technology alike. </p>
        <p></p>
        <p align="center"><button className="button"><a href="mailto:mike@Travlr.com">Contact</a></button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src={require('./image3.jpeg')} alt="Mike" />
      <div className="container">
      <br />
        <h2>Shyla Mugugue</h2>
        <p className="title">Designer</p>
        <p>Structure is everything in a organisation. When we think structure, we think design. When we at Travlr think of design, the only name that comes to mind is Shyla. </p>
        <p></p>
        <p align="center"><button className="button"><a href="mailto:shyla@Travlr.com">Contact</a></button></p>
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

const About = (props) => {
  return <Layout children={<AboutComponent />} />;
};

export default About;