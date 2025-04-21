import React from 'react'
import Hero2Component from '../components/Hero2Component/Hero2Component'
import { about } from '../Data/HeroData'
import Footer from '../components/Footer/Footer'
import Achievements from '../components/Achievements/Achievements'
import OurGoals from '../components/OurGoals/OurGoals'
import Together from '../components/Together/Together'
import NavBar from '../components/NavBar/NavBar'

function About() {

    return (
        <div>
            <NavBar/>
            <Hero2Component heroTitle={about.title} heroDesc={about.desc}/>
            <Achievements/>
            <OurGoals/>
            <Together/>
            <Footer/>
        </div>
    )
}

export default About
