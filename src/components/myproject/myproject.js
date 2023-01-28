import aquascape from "../../images/aquascape.gif"

function MyProject(){
    
    const projectContent = [
        {
            gif:<img src={aquascape} alt="Shoes" className="rounded-lg bg-white"/>,
            title:"Smart Aquascape System",
            desc:"Arduino, ESP8266, Fuzzy Logic, Firebase, and Website"
        },
        {
            gif:<img src={aquascape} alt="Shoes" className="rounded-lg bg-white"/>,
            title:"Temi Marble",
            desc:"Android Studio, Java, Firebase, Temi SDK"
        },
        {
            gif:<img src={aquascape} alt="Shoes" className="rounded-lg bg-white"/>,
            title:"Smart Aquascape System",
            desc:"Arduino, ESP8266, Fuzzy Logic, Firebase, and Website"
        }
    ]


    return(
        <div className="flex flex-wrap justify-evenly">
            {projectContent.map(function(value){
                return <div className="card w-96 shadow-2xl flex justify-center">
                            <figure>
                                {value.gif}
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{value.title}</h2>
                                <p>{value.desc}</p>
                            </div>
                            <div className="card-actions flex justify-center">
                                <button className="btn btn-primary">Check This Out!</button>
                            </div>
                </div>})}
        </div>
    )
}
export default MyProject