import { Avatar } from "@nextui-org/react"
import ProfilePicture from "../../images/profilepicture.jpg"
import { Container } from "@nextui-org/react"
import { BsInstagram,BsLinkedin } from "react-icons/bs"
import {AiOutlineMail  } from "react-icons/ai"
function About() {
  return (
    <div id="about">
    <Container className="mb-10 mt-24">
      <section className="flex flex-col justify-center text-center items-center">
        <Avatar
          src={ProfilePicture}
          css={{ size: "$80" }}
          className="mb-10"
          aria-multiselectable
        />
        <div style={{fontSize:"30px",display:"flex"}} className="w-36 items-center flex justify-around mb-3">
          <a href="https://www.instagram.com/kisahae____/"><BsInstagram /></a>
          <a href="https://www.linkedin.com/in/haenuki-sachi-59153a216/"><BsLinkedin/></a>
          <a href="mailto:sachihaenuki1@gmail.com"><AiOutlineMail/></a>
        </div>
        <h1 className="inline-block font-semibold text-5xl mb-10">
          Haenuki Sachi
        </h1>
        <p>My name is Haenuki Sachi. I am a fresh graduate electrical engineering student from Atma Jaya Catholic University. I have a strong interest in learning new technologies. 
          Feel free to send me any messages! I am looking forward to work with you 😃</p>
      </section>
    </Container>
    </div>
  )
}

export default About
