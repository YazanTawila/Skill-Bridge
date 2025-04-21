import React from 'react'
import './CoursesCardsPage.css'
import  {CoursesCard}  from '../../Data/CoursesHomeCard'
import CourseCard from '../CourseCard/CourseCard'
function CoursesCardsPage() {
    return (
        <div className='contianer-x CoursesCardsPage' id='courses'>
            {CoursesCard.slice(0,5).map((course,index) => (
                <CourseCard key={course.id} 
                title={course.title} 
                desc={course.desc}
                image1={course.img1}
                image2={course.img2}
                image3={course.img3}
                duration={course.duration}
                level={course.level}
                coach={course.coach}
                Curriculum={course.Curriculum} path={`/coursesopen/cours/:id`}/>
            ))}
        </div>
    )
}

export default CoursesCardsPage
