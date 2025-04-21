import React from 'react'
import Hero2Component from '../components/Hero2Component/Hero2Component'
import { coursesOpen } from '../Data/HeroData'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import CourseAbout from '../components/CourseAbout/CourseAbout'

function CoursesOpen() {
    return (
        <div>
            <NavBar/>
            <Hero2Component heroTitle={coursesOpen.title} heroDesc={coursesOpen.desc}/>
            <CourseAbout/>
            <Footer/>
        </div>
    )
}

export default CoursesOpen
