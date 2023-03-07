import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Hanyang_univ from "../../images/hanyang_univ.png"
import asia_univ from "../../images/asia_univ.jpg"
import atmalogo from "../../images/atma-univlogo.png"

function VerticalEducationTimeline() {
  const education = [
    {
      img: atmalogo,
      alt: "Atma Jaya Logo",
      date: "August 2018- Jan 2023",
      title: "Atma Jaya Catholic University",
      subtitle: "Serpong, Tangerang Selatan",
      description:
        "Electrical Engineering Department (GPA: 3.99/4.00), Activities: Atma Jaya Wushu Club, OASE, and Atma Jaya Artificial Intelligence Base Club (AJAIB).",
      height: "150%"
    },
    {
      img: Hanyang_univ,
      alt: "Hanyang Logo",
      date: "March 2022 - June 2022",
      title: "Hanyang University",
      subtitle: "Ansan, South Korea",
      description:
        "Robot Engineering (GPA:4.18/4.5), Course Taken: ICT Fusion Robotics, Game Programming Language, Japan and Global Community, Advanced English Writing, and Survival Korean Class.",
      height: "100%"
    },
    {
      img: asia_univ,
      alt: "Asia Logo",
      date: "September 2021 - January 2022",
      title: "Asia University Taiwan",
      subtitle: "Taichung, Taiwan",
      description:
        "Virtual Exchange Student, Course Taken: Digital Image Processing (96.2) and Data Science (98).",
      height: "100%"
    }
  ]
  return (
    <div id="education">
      <VerticalTimeline lineColor="#000">
        {education.map(function (value) {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work transition-all duration-200 hover:scale-105"
              contentArrowStyle={{ borderRight: "7px solid  rgb(25, 26, 28)" }}
              icon={
                <img
                  src={value.img}
                  alt={value.alt}
                  style={{
                    backgroundColor: "white",
                    height: `${value.height}`,
                    margin: "auto"
                  }}
                ></img>
              }
              date={value.date}
            >
              <h3 className="vertical-timeline-element-title">{value.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {value.subtitle}
              </h4>
              <p>{value.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default VerticalEducationTimeline
