import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BackgroundSection from "./Components/BackgroundSection";
import Content from "./Components/Content";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
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
      <Content />
      <div className="footer">
        <p>
          &copy; Metamorphosis Gym Franchisor, LLC 2023. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default App;
