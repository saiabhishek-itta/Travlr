import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./style.css";

function Why() {
  return (
    <div className="flex flex-col items-center justify-center my-16">
  <h3 className="mb-4">Why Us?</h3>
    <Accordion defaultActiveKey={['0']} className="header-style">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Our Awards - Pioneer in helping people travel across USA</Accordion.Header>
        <Accordion.Body>
        We have received Newsletter's yearly awards for the best travel agency. Not just for one year but a continuous attempt to provide the best service for our customers, has given us the title for the past 10 years.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Our Culture</Accordion.Header>
        <Accordion.Body>
        We believe in our employees, we provide paternity, maternity leave and provide facilities for their well being. Health Insurance, life insurace provided to all our employees.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Our Belief</Accordion.Header>
        <Accordion.Body>
          Our packages provide great value. It is both cost efficient and a wonderful experience. All you have to do is sit back and enjoy your vacation.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Why;