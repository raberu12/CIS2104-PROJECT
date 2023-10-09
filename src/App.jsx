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
    </>
  );
}

export default App;
