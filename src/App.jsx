import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import CustomCursor from "./Components/CustomCursor";
import AboutPage from './Pages/About/AboutPage'
import ProjectPage from './Pages/Projects/ProjectsPage'
import HealthWave from "./Pages/Projects/HealthWave/HealthWave";
import AXWeather from "./Pages/Projects/AXWeather/AXWeather";
import ModelHq from "./Pages/Projects/ModelHq/ModelHq";

const App = () => {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      wheelMultiplier: 0.5,
      gestureOrientation: "vertical",
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenis.start();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper">
          <h1 className="preloader-text">
            {["H", "E", "L", "L", "O"].map((letter, index) => (
              <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
                {letter}
              </span>
            ))}
          </h1>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="main-container"
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path='/projectpage' element={<ProjectPage />}></Route>
            <Route path="/projectpage/healthwave" element={<HealthWave />} />
            <Route path="/projectpage/axweather" element={<AXWeather />} />
            <Route path="/projectpage/modelhq" element={<ModelHq />} />
          </Routes>
        </motion.div>
      )}
    </>
  );
};

export default App;
