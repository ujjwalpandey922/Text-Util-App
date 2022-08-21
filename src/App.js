import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#0e183f";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <NavBar
          Title="TextUtil"
          Home="Home"
          Link="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
