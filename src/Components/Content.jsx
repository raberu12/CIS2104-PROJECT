import React from "react";

function Content() {
  return (
    <div className="content">
      <div className="content-head">
        <h4>Why choose Metamorphosis Gym?</h4>
        <br />
        <h4>Here's what you'll gain with our membership</h4>
      </div>
      <div className="content-body">
        <div className="benefit">
          <img src="/Support.png" alt="Support" />
          <h3>Support</h3>
          <p>
            When you join, you will receive a free personalized fitness plan.
            Our friendly and expert coaches will assist you on your fitness
            journey, no matter your destination.
          </p>
        </div>
        <div className="benefit">
          <img src="/Equipment.png" alt="Equipment" />
          <h3>Equipment</h3>
          <p>
            We've got you covered with personalized support in the gym and handy
            tools to keep you on track while you're out and about.
          </p>
        </div>
        <div className="benefit">
          <img src="/Convenience.png" alt="Convenience" />
          <h3>Convenience</h3>
          <p>
            Our members have access to over 5,100 workout locations worldwide,
            available 24/7 for their convenience.
          </p>
        </div>
        <div className="benefit">
          <img src="/Community.png" alt="Community" />
          <h3>Community</h3>
          <p>
            Enrolling in an MG gym membership means joining a supportive
            community committed to achieving success in fitness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
