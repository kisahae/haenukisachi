import React from "react"
import Navbar from "./components/Navbar/navbar"
import About from "./components/Content/about"
import particlesConfig from './config/configParticles.json'
import Timeline from './components/VerticalTimeline/verticaltimeline'
import VerticalEducationTimeline from "./components/verticaltimelineeducation/verticaltimelineedu"
import React_Masonry from "./components/photogallery/masonry"
import { useCallback } from "react";
import { Container } from "@nextui-org/react"

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Skills from "./components/skills/skills"
import "./App.css"

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
    <div>
    {/* // <div style={{ position: 'relative', overflow: "hidden" }}> */}
      {/* <div style={{ position: 'absolute'}}>
        <Particles id="tsparticles"
            init={particlesInit} loaded={particlesLoaded} height="100vh" width="100vw" options={particlesConfig} />
      </div> */}
      <Navbar />
      <About/>
      
      <React_Masonry/>
      <div className="EduTitle flex justify-center items-center" style={{height:"300px",backgroundColor:"white"}}>
          <h1 className="text-6xl">Experiences</h1>
      </div>
      <Timeline/>
      <div className="EduTitle flex justify-center items-center" style={{height:"300px",backgroundColor:"white"}}>
          <h1 className="text-6xl">Education</h1>
      </div>
      <VerticalEducationTimeline/>
      <div className="EduTitle flex justify-center items-center" style={{height:"300px",backgroundColor:"white"}}>
          <h1 className="text-6xl">Skills</h1>
      </div>
      <Container style={{display:"flex",justifyContent:"space-evenly"}}>
      <Skills/>
      <Skills/>
      <Skills/>
      <Skills/>
      <Skills/>
      <Skills/>
      <Skills/>
      <Skills/>
      <Skills/>
      <Skills/>
      </Container>
      </div>
  )
}
