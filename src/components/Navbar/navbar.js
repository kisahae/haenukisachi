import { Container ,Navbar as NextUINavbar } from "@nextui-org/react"

function Navbar() {
  return (
    <NextUINavbar shouldHideOnScroll variant="sticky" className="mb-10"  >
      <Container css={{display:"flex",justifyContent:"center"}} >
      <NextUINavbar.Content
        activeColor="primary"
        css={{display:"flex",justifyContent:"center"}}
      >
        <NextUINavbar.Link href="#content">About Me</NextUINavbar.Link>
        <NextUINavbar.Link href="#">Experiences</NextUINavbar.Link>
        <NextUINavbar.Link href="#">Project</NextUINavbar.Link>
      </NextUINavbar.Content>
      </Container>
    </NextUINavbar>
  )
}

export default Navbar
