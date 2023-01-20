import React from "react"
import Navbar from "./components/Navbar/navbar"
import About from "./components/Content/about"
import particlesConfig from './config/configParticles.json'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
    const particlesInit = useCallback(async engine => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);

  return (
    <div style={{ position: 'relative', overflow: "hidden" }}>
        <div style={{ position: 'absolute'}}>
        <Particles id="tsparticles"
            init={particlesInit} loaded={particlesLoaded} height="100vh" width="100vw" options={particlesConfig} />
      </div>
      <Navbar />
      <About />
    </div>
  )
}
