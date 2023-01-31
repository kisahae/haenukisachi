import aquascape from "../../images/aquascape.gif"
import temi from "../../images/Temi.gif"
import animal from "../../images/animalprotector.gif"

function MyProject(){
    
    const projectContent = [
        {
            gif:<img src={aquascape} alt="Shoes" className="rounded-lg"/>,
            title:"Smart Aquascape System",
            about:"My Undergraduate Project",
            desc:"We can control and monitor the aquascape parameter using the website. The system also uses fuzzy logic controller."
        },
        {
            gif:<img src={temi} alt="Shoes" className="rounded-lg"/>,
            title:"Temi Marble",
            about:"Working with Koreans in ICT Fusion Robotic Class",
            desc:"Temi robot will move if we can answer the question correctly. The concept of the game is similar to Yut-Game."
        },
        {
            gif:<img src={animal} alt="Shoes" className="rounded-lg"/>,
            title:"Animal Protector",
            about:"This is my very first website. I worked together with my friend in web programming class.",
            desc:"The website enrouges the readers to support and become the animal protector."
        }
    ]


    return(
        <div id="project" className="flex flex-wrap justify-evenly mb-5">
            {projectContent.map(function(value){
                return <div className="card w-96  flex justify-center mb-4 hover:scale-105 duration-300 p-3 hover:bg-gray-800 hover:text-white">
                            <figure className="mt-3">
                                {value.gif}
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-blue-600">{value.title}</h2>
                                <p className="font-bold">{value.about}</p>
                                <p style={{fontStyle:"italic"}}>{value.desc}</p>
                            </div>
                </div>})}
        </div>
    )
}
export default MyProject