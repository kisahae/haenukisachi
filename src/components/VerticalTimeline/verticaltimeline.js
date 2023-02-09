import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HiUsers,HiOutlineCode } from "react-icons/hi"
import { IoIosNuclear } from "react-icons/io";
import "./verticaltimeline.css"

function Timeline(){
  const educationData = [
    {
      date:"November 2022 - February 2023",
      icon:<HiOutlineCode />,
      title:"Software Developer Intern",
      subtitle:"Serpong, Tangerang Selatan",
      explanation:"React JS, Storybook, Babel, Rollup, Tailwind CSS, Bitbucket, and Jira."
    },
    {
      date:"September 2021 - October 2021",
      icon:<IoIosNuclear />,
      title:"Instrumentation and Control Intern",
      subtitle:"Serpong, Tangerang Selatan",
      explanation:"Creating the simulation of fire alarm system for nuclear reactor using LabVIEW and Proteus."
    },
    {
      date:"June 2019 - August 2022",
      icon:<HiUsers />,
      title:"Computer Lab Assistant",
      subtitle:"Serpong, Tangerang Selatan",
      explanation:"Maintaining the lab facilities and assisting the lecturer."
    }
  ]
    return (
      <div>
          <div id="experience">
            <VerticalTimeline lineColor="#000">
            {
                educationData.map(function (value){
                  return <VerticalTimelineElement 
                          className="vertical-timeline-element--work transition-all duration-200 hover:scale-105"
                          contentArrowStyle={{ borderRight: '7px solid  rgb(25, 26, 28)' }}
                          date={value.date}
                          iconStyle={{ background: 'rgb(25, 26, 28)', color: '#fff' }}
                          icon={value.icon}
                        >
                          <h3 className="vertical-timeline-element-title">{value.title}</h3>
                          <h4 className="vertical-timeline-element-subtitle">{value.subtitle}</h4>
                          <p>
                              {value.explanation}
                          </p>
                        </VerticalTimelineElement>
                  })
            }
            </VerticalTimeline>
          </div>
      </div>
)
}

export default Timeline