import { Container ,Navbar as NextUINavbar } from "@nextui-org/react"

function Navbar() {
  return (
    <div style={{position:"fixed",width:"100vw",zIndex:"1000"}}>
    <NextUINavbar shouldHideOnScroll variant="static" className="mb-10" >
      <Container css={{display:"flex",justifyContent:"center"}} >
      <NextUINavbar.Content
        activeColor="primary"
        css={{display:"flex",justifyContent:"center"}}
      >
        <NextUINavbar.Link href="#about">About Me</NextUINavbar.Link>
        <NextUINavbar.Link href="#experience">Experiences</NextUINavbar.Link>
        <NextUINavbar.Link href="#education">Education</NextUINavbar.Link>
        <NextUINavbar.Link href="#education">Projects</NextUINavbar.Link>
      </NextUINavbar.Content>
      </Container>
    </NextUINavbar>
    </div>
  )
}

export default Navbar
