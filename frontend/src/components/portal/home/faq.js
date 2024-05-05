import React from "react";
import Layout from "../layout/index";


const Faqcomponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <br />
      <div class="accordion" id="accordionExampleY">
  <div class="accordion-item">
    <div className="faq-section">
      <h3>Frequently asked questions</h3>
   
    <h2 class="accordion-header" id="headingOneY">
      <button class="accordion-button" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#collapseOneY" aria-expanded="true" aria-controls="collapseOneY">
        <i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>WHY SHOULD I USE A TRAVEL AGENT TO BOOK A VACATION?
      </button>
    </h2>
    <div id="collapseOneY" class="accordion-collapse collapse show" aria-labelledby="headingOneY"
      data-mdb-parent="#accordionExampleY">
      <div class="accordion-body">
        <strong>A travel agent takes all of the headache out of planning a trip and handles virtually all aspects of your travel, at absolutely no cost to you. The combined experience of the team and the feedback from our thousands of travelers provides an invaluable resource to the traveler planning an important trip.

In recent years, the top travel vendors have empowered and trained the agency community to be even more effective and efficient go-betweens. </strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwoY">
      <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
        <i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>DO I NEED TRAVEL INSURANCE?
      </button>
    </h2>
    <div id="collapseTwoY" class="accordion-collapse collapse" aria-labelledby="headingTwoY"
      data-mdb-parent="#accordionExampleY">
      <div class="accordion-body">
        <strong>Travel insurance is available and recommended to protect your travel investment. Many trips, such as tours and cruises, involve non-refundable funds paid months in advance. Travel insurance protects you from losing this investment. Perhaps even more important is the ‘during travel’ coverage and assistance that comes with the top-flight insurance companies we carry.

</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThreeY">
      <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
        <i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>HOW DO I KNOW I CAN TRUST THIS TRAVEL VENDOR?
      </button>
    </h2>
    <div id="collapseThreeY" class="accordion-collapse collapse" aria-labelledby="headingThreeY"
      data-mdb-parent="#accordionExampleY">
      <div class="accordion-body">
        <strong>Boston Travels a Direct Travel Company is extremely cautious when it comes to choosing our business partners and vendors. This vetting of travel suppliers and support of the ‘good ones’ over the past 50+ years has given us preferred access to the world’s top trusted suppliers. In turn, they trust us to represent and care for the reputations they have earned over the years and to deliver the same high standard of care to our mutual clients.

</strong>
      </div>
    </div>
  </div>
</div> </div>
     
    </div>
  );
};

const Faq = (props) => {
  return <Layout children={<Faqcomponent />} />;
};

export default Faq;