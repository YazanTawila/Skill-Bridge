import { useLocation } from "react-router-dom";
import './CourseAbout.css'
import imgvideo from '../../assets/images/CoursesImg2.png'
import CourseAboutCard from "../CourseAboutCard/CourseAboutCard";
import { CACardUI } from "../../Data/CourseAboutCard";

function CourseAbout() {
    
    return (
        <div className="CourseAboutSection contianer-x">
            <div className="C-A-S-Content">
                <div className="C-A-S-C-Img">
                    <img src={imgvideo} alt="" />
                </div>
                <div className="C-A-S-C-Card">
                    {CACardUI.map ((e,index) => (
                        <CourseAboutCard key={index} num={e.num}
                        title={e.title}
                        desc1={e.desc1}
                        desc2={e.desc2}
                        desc3={e.desc3}
                        duration1={e.duration1}
                        duration2={e.duration2}
                        duration3={e.duration3}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseAbout
