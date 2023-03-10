import { Avatar } from "@nextui-org/react"
import ProfilePicture from "../../images/profilepicture.jpg"
import { TypeAnimation } from 'react-type-animation';
import { Container } from "@nextui-org/react"
import { BsInstagram,BsLinkedin,BsGithub } from "react-icons/bs"
function About() {
  const contact=[
    {
      link: "https://www.instagram.com/kisahae____/",
      icon: <BsInstagram />
    },
    {
      link: "https://www.linkedin.com/in/haenuki-sachi-59153a216/",
      icon: <BsLinkedin/>
    },
    {
      link:"https://github.com/kisahae",
      icon: <BsGithub/>
    }
  ]

  return (
    <div id="about">
    <Container className="mb-10">
      <section className="flex flex-col justify-center text-center items-center">
        <Avatar
          src={ProfilePicture}
          css={{ size: "$80" }}
          className="mb-10 mt-24"
          aria-multiselectable
        />
        <div style={{fontSize:"30px",display:"flex"}} className="w-36 items-center flex justify-around mb-3">
          {
            contact.map(function (value){
              return <a href={value.link}>{value.icon}</a>
            })
          }
        </div>
        <TypeAnimation
            sequence={['Haenuki Sachi', 5000, '']}
            speed={10} 
            deletionSpeed={10}
            wrapper="h2"
            repeat={Infinity}
            style={{ fontSize: '48px' }}
      />
        <p>Hello! My name is Haenuki Sachi. I am a fresh graduate electrical engineering student from Atma Jaya Catholic University. I have a strong interest in learning new technologies. 
          Feel free to send me any messages! I am looking forward to work with you 😃</p>
      </section>
    </Container>
    </div>
  )
}

export default About
