import {DiJavascript,DiHtml5,DiCss3,DiReact,DiPhp,DiDatabase,DiJava,DiGithubBadge,DiBitbucket,DiBootstrap} from "react-icons/di";
import {SiCplusplus,SiCsharp,SiArduino,SiStorybook,SiTailwindcss} from "react-icons/si"
import matlab from "../../images/matlab.png"
import python from "../../images/python.png"
import androidstudio from "../../images/androidstudio.png"
import flutter from "../../images/flutter.png"
import firebase from "../../images/firebase.png"
function Skills(){
  const description = [
    {
      icon:<DiHtml5 style={{color:"#e34c26"}}/>,
      text:"HTML"
    },
    {
      icon:<DiCss3 style={{color:"#264de4"}}/>,
      text:"CSS"
    },
    {
      icon:<DiJavascript style={{color:"#f0db4f"}}/>,
      text:'JavaScript'
    },
    {
      icon:<DiReact style={{color:"#61dbfb"}}/>,
      text:"React"
    },
    {
      icon:<DiPhp style={{color:"#8993be"}}/>,
      text:"PHP"
    },
    {
      icon:<DiDatabase style={{color:"#f29111"}}/>,
      text:"SQL"
    },
    {
      icon:<SiCplusplus style={{color:"#044f88"}}/>,
      text:"C/C++"
    },
    {
      icon:<SiCsharp style={{color:"#652772"}}/>,
      text:"C#"
    },
    {
      icon:<img src={python} style={{width:"32%"}} alt="python"></img>,
      text:"Python"
    },
    {
      icon:<DiJava style={{color:"red"}}/>,
      text:"Java"
    },
    {
      icon:<SiArduino style={{color:"#009298"}}/>,
      text:"Arduino"
    },
    {
      icon: <img src={matlab} style={{width:"40%"}} alt="arduino"></img>,
      text:"Matlab"
    },
    {
      icon:<img src={androidstudio} style={{width:"35%"}} alt="androidstudio"></img>,
      text:"Android Studio"
    },
    {
      icon:<DiGithubBadge/>,
      text:"Github"
    },
    {
      icon:<DiBitbucket style={{color:"#2185ff"}}/>,
      text:"BitBucket"
    },
    {
      icon:<SiStorybook style={{color:"#f74581"}}/>,
      text:"Storybook"
    },
    {
      icon:<DiBootstrap style={{color:"#7111F0"}}/>,
      text:"Bootstrap"
    },
    {
      icon:<SiTailwindcss style={{color:"#07B0CE"}}/>,
      text:"Tailwind CSS"
    },
    {
      icon:<img src={flutter} style={{width:"35%"}} alt="flutter"></img>,
      text:"Flutter"
    },
    {
      icon:<img src={firebase}style={{width:"35%"}} alt="firebase"></img>,
      text:"Firebase"
    },
  ]
    return (
    <div className="flex flex-wrap justify-evenly items-center" style={{width:"90%"}}>
        {description.map(function(value){
            return <div className="mb-10 card w-52 h-52 flex justify-evenly shadow-xl bg-base-100 border-4 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-3">
                <figure className="text-7xl">{value.icon}</figure>
                    <div>
                      <h2 className="card-title justify-center">{value.text}</h2>
                    </div>
            </div>
        })}
    </div>)
}

export default Skills