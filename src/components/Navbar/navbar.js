import { Navbar as NextUINavbar } from "@nextui-org/react"

function Navbar() {
  const NavbarItem = [
    {
      navbarid: "#about",
      text:"About"
    },
    {
      navbarid: "#experience",
      text:"Experiences"
    },
    {
      navbarid: "#education",
      text:"Education"
    },
    {
      navbarid: "#project",
      text:"Projects"
    }
  ]
  return (
    <div style={{position:"fixed",width:"100%",zIndex:"10000",height:"80px",backgroundColor:"white"}}>
      <NextUINavbar.Content
        activeColor="primary"
        css={{display:"flex",justifyContent:"center",width:"100%"}}
      >
        {
          NavbarItem.map(function (value){
            return  <NextUINavbar.Link href={value.navbarid}>{value.text}</NextUINavbar.Link>
          })
        }
      </NextUINavbar.Content>

    </div>
  )
}

export default Navbar
