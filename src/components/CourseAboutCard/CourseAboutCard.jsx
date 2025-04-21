import React from 'react'
import './CourseAboutCard.css'
import { LuClock3 } from "react-icons/lu";
function CourseAboutCard({num,title,desc1,desc2,desc3, duration1, duration2, duration3}) {
    return (
        <div className='CourseAboutCard'>
            <p className='CardNumer sizeNum80 weight-700'>{num}</p>
            <h4 className='fontsize24 weight-600'>{title}</h4>
            <div className='CardLessons'>
                <div className='Lesson'>
                    <div className='LessonTitle'>
                        <p className='fontsize20 weight-500'>{desc1}</p>
                        <span className='fontsize18 weight-400'>Lesson 01</span>
                    </div>
                    <div className='LessonDuration'>
                        <span className='fontsize18 weight-400'><LuClock3 />{duration1}</span>
                    </div>
                </div>
                <div className='Lesson'>
                    <div className='LessonTitle'>
                        <p className='fontsize20 weight-500'>{desc2}</p>
                        <span className='fontsize18 weight-400'>Lesson 01</span>
                    </div>
                    <div className='LessonDuration'>
                        <span className='fontsize18 weight-400'><LuClock3 />{duration2}</span>
                    </div>
                </div>
                <div className='Lesson'>
                    <div className='LessonTitle'>
                        <p className='fontsize20 weight-500'>{desc3}</p>
                        <span className='fontsize18 weight-400'>Lesson 01</span>
                    </div>
                    <div className='LessonDuration'>
                        <span className='fontsize18 weight-400'><LuClock3 />{duration3}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseAboutCard
