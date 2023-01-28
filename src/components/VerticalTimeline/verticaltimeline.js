import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HiUsers,HiOutlineCode } from "react-icons/hi"
import { IoIosNuclear } from "react-icons/io";
import "./verticaltimeline.css"

function Timeline(){
    return (
      <div>
        <div id="experience">

        
<VerticalTimeline lineColor="#000">
  <VerticalTimelineElement 
    className="vertical-timeline-element--work hover:bg-gray-300/10 transition-all duration-200 hover:scale-105"
    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 26, 28)' }}
    date="November 2022 - Present"
    iconStyle={{ background: 'rgb(25, 26, 28)', color: '#fff' }}
    icon={<HiOutlineCode />}
  >
    <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Serpong, Tangerang Selatan</h4>
    <p>
      React JS, Storybook, Babel, Rollup, Tailwind CSS, Bitbucket, and Jira.
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work hover:bg-gray-300/10 transition-all duration-200 hover:scale-105"
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 26, 28)' }}
    date="June 2019 - August 2022"
    iconStyle={{ background: 'rgb(25, 26, 28)', color: '#fff' }}
    icon={<HiUsers />}
  >
    <h3 className="vertical-timeline-element-title">Computer Lab Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">Serpong, Tangerang Selatan</h4>
    <p>
      Maintaining the lab facility and assisting the lecturer. 
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work hover:bg-gray-300/10 transition-all duration-200 hover:scale-105"
    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 26, 28)' }}
    date="June 2019 - August 2022"
    iconStyle={{ background: 'rgb(25, 26, 28)', color: '#fff' }}
    icon={<IoIosNuclear />}
  >
    <h3 className="vertical-timeline-element-title">Instrumentation and Control Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Serpong, Tangerang Selatan</h4>
    <p>
      Created the simulation of fire alarms system for nuclear reactor using LabVIEW and Proteus. 
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
  </div>
  </div>
)
}

export default Timeline