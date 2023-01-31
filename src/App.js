import React from "react"
import Navbar from "./components/Navbar/navbar"
import About from "./components/Content/about"
import particlesConfig from './config/configParticles.json'
import { Container } from "@nextui-org/react"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Timeline from './components/VerticalTimeline/verticaltimeline'
import VerticalEducationTimeline from "./components/verticaltimelineeducation/verticaltimelineedu"
import React_Masonry from "./components/photogallery/masonry"
import Skills from "./components/skills/skills"
import MyProject from "./components/myproject/myproject"
import sticker from "../src/images/cute-cartoon-unscreen.gif"
import { DiGithubBadge } from "react-icons/di";

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
          <h1 className="text-5xl underline decoration-blue-700" style={{textUnderlineOffset: "30px"}}>Experiences 💼</h1>
      </div>
      <Timeline/>
      <div className="EduTitle flex justify-center items-center" style={{height:"300px",backgroundColor:"white"}}>
          <h1 className="text-5xl underline decoration-blue-700" style={{textUnderlineOffset: "30px"}}>Education 🎓</h1>
      </div>
      <VerticalEducationTimeline/>

      <div className="EduTitle flex justify-center items-center" style={{height:"300px",backgroundColor:"white"}}>
          <h1 className="text-5xl p-5 underline decoration-blue-700" style={{textUnderlineOffset: "30px"}}>Skills 🛠️</h1>
      </div>


      <div style={{display:"flex",justifyContent:"center"}}>
          <Skills/>
      </div>
      <div className="flex-col items-center justify-center text-center" style={{height:"250px",backgroundColor:"white"}}>
          <h1 className="text-6xl p-5 underline decoration-blue-700 mt-10" style={{textUnderlineOffset: "30px"}}>My Projects</h1>
          <div className="flex justify-center" style={{marginTop:"20px"}}>
          {/* //<img src={sticker} style={{width:"8%",marginTop:"8px"}}></img> */}
          <a className="flex justify-center mt-4" href="https://github.com/kisahae" style={{fontSize:"600%"}}>
          <DiGithubBadge className="hover:scale-105 duration-300 transition-all bg-transparent"/>
          </a>
          </div>
      </div>
      <MyProject/>
     
      </div>
  )
}
