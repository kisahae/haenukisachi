import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Hanyang_univ from "../../images/hanyang_univ.png"
import asia_univ from "../../images/asia_univ.jpg"
import atmalogo from "../../images/atma-univlogo.png"

function VerticalEducationTimeline(){
    return(
        <div id = "education">
<VerticalTimeline lineColor="#000">
  <VerticalTimelineElement
    className="vertical-timeline-element--work hover:bg-gray-300/10 transition-all duration-200 hover:scale-105"
    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 26, 28)' }}
    icon={<img src={atmalogo} className="atma_logo" style={{backgroundColor:"white",height:"150%",margin:"auto"}}></img>}
    date="2018-2023"
  >
    <h3 className="vertical-timeline-element-title">Atma Jaya Catholic University</h3>
    <h4 className="vertical-timeline-element-subtitle">Serpong, Tangerang Selatan</h4>
    <p>
      Electrical Engineering Department (GPA: 3.99/4.00), Activities: Atma Jaya Wushu Club, OASE, and Atma Jaya Artificial Intelligence Base Club (AJAIB).
    </p>
    <p>2018 - 2023</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work hover:bg-gray-300/10 transition-all duration-200 hover:scale-105"
    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 26, 28)' }}
    icon={<img src={Hanyang_univ} style={{width:"80px",backgroundColor:"white"}}></img>}
    date="March 2022 - June 2022"
  >
    <h3 className="vertical-timeline-element-title">Hanyang University</h3>
    <h4 className="vertical-timeline-element-subtitle">Ansan, South Korea</h4>
    <p>
      Robot Engineering (GPA:4.18/4.5), Course Taken: ICT Fusion Robotics, Game Programming Language, Japan and Global Community, Advanced English Writing, and Survival Korean Class. 
    </p>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work hover:bg-gray-300/10 transition-all duration-200 hover:scale-105"
    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 26, 28)' }}
    iconStyle={{ background: 'rgb(25, 26, 28)', color: '#fff' }}
    icon={<img src={asia_univ}></img>}
    date="September 2021 - January 2022"
  >
    <h3 className="vertical-timeline-element-title">Asia University Taiwan</h3>
    <h4 className="vertical-timeline-element-subtitle">Taichung, Taiwan</h4>
    <p>
      Virtual Exchange Student, Course Taken: Digital Image Processing and Data Science.
    </p>
   
  </VerticalTimelineElement>
  </VerticalTimeline>
  </div>
    )
}


  export default VerticalEducationTimeline