import React from 'react'
import Hero2Component from '../components/Hero2Component/Hero2Component'
import { courses } from '../Data/HeroData'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

import CoursesCardsPage from '../components/CoursesCardsPage/CoursesCardsPage'

function Courses() {
    return (
        <div>
            <NavBar/>
            <Hero2Component heroTitle={courses.title} heroDesc={courses.desc}/>
            <CoursesCardsPage/>
            <Footer/>
        </div>
    )
}

export default Courses
