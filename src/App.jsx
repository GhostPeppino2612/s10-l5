import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WeatherInfo from "./components/WeatherInfo";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather/:city" element={<WeatherInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
