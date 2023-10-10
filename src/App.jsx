import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BackgroundSection from "./Components/BackgroundSection";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo"></div>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" />
              <Route path="/findgym" />
              <Route path="/trainig" />
              <Route path="/blog" />
              <Route path="/whyjoin" />
              <Route path="/signin" />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <div>
        <BackgroundSection />
      </div>
      <div className="content">
        <div className="content-head">
          <h4>Why choose Metamorphosis Gym?</h4>
          <br />
          <h4>Here's what you'll gain with our membership</h4>
        </div>
        <div className="content-body">
          <p>
            <h3>Support</h3>
            When you join, you will recieve a free personalized fitness plan.
            Our friendly and expert coaches will assit you on your fitness
            journey, no matter your destination.
          </p>
          <p>
            <h3>Equipment</h3>
            We've got yo ucovered with personalized support in the gym and handy
            tools to keep you ont rack while you're out and about.
          </p>
          <p>
            <h3>Convenience</h3>
            Our members have access to over 5,100 workout locations worldwide,
            available 24/7 for their convenience.
          </p>
          <p>
            <h3>Community</h3>
            Enrolling in an MG gym membership means joining a supportive
            community commited to achieve succss in fitness.
          </p>
        </div>
      </div>
      <div className="footer">
        <p>
          &copy; Metamorphosis Gym Franchisor, LLC 2023. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default App;
