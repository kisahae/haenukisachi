import { Avatar } from "@nextui-org/react"
import ProfilePicture from "../../images/profilepicture.jpg"
import { Container } from "@nextui-org/react"
function About() {
  return (
    <Container>
      <section className="flex flex-col justify-center text-center items-center">
        <Avatar
          src={ProfilePicture}
          css={{ size: "$80" }}
          className="mb-10"
          aria-multiselectable
        />
        <h1 className="inline-block font-semibold text-5xl mb-10">
          Hello All! 🐲
        </h1>
        <p>My name is Haenuki Sachi. I am a fresh graduate electrical engineering student from Atma Jaya Catholic University. I have a strong interest in learning new technologies. 
          Feel free to send me any messages!</p>
      </section>
    </Container>
  )
}

export default About
