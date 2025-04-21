import React from 'react'
import './OurCourses.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import CoursesHomeCard from '../CoursesHomeCard/CoursesHomeCard'
import { CoursesCard } from '../../Data/CoursesHomeCard'
function OurCourses() {
    return (
        <div className='OurCourses contianer-x' id='OurCourses'>
            <div className='CoursesContent'>
                <TitleComponent
                    title={"Our Courses"} 
                    desc={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
                    showButton={true}
                    />
                <div className='CoursesHomeCards'>
                    {CoursesCard.map((item,index) =>(
                        <CoursesHomeCard
                        key={index}
                        CardImage={item.img}
                        duration={item.duration}
                        level={item.level}
                        coach={item.coach}
                        title={item.title}
                        desc={item.desc}
                        path={"/courses"}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurCourses
