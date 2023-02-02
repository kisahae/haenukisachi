import { Container ,Navbar as NextUINavbar } from "@nextui-org/react"

function Navbar() {
  return (
    <div style={{position:"fixed",width:"100%",zIndex:"10000",height:"80px",backgroundColor:"white"}}>
      <NextUINavbar.Content
        activeColor="primary"
        css={{display:"flex",justifyContent:"center",width:"100%"}}
      >
        <NextUINavbar.Link href="#about">About</NextUINavbar.Link>
        <NextUINavbar.Link href="#experience">Experiences</NextUINavbar.Link>
        <NextUINavbar.Link href="#education">Education</NextUINavbar.Link>
        <NextUINavbar.Link href="#project">Projects</NextUINavbar.Link>
      </NextUINavbar.Content>

    </div>
  )
}

export default Navbar
