import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Hero/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { CursorProvider } from "react-cursor-custom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "./components/Particle";
import Techstack from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <CursorProvider
    //   // color={themes[theme].secondaryText}
    //   color='#c770f0'
    //   ringSize={25}
    //   transitionTime={75}
    // >

    <Router>

      <Preloader load={load} />
      <Navbar />
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Particle />
        {/* <ScrollToTop /> */}
        <Home />
        <About />
        <Techstack />
        <Work />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
