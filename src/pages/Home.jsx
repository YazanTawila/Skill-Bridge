import React from 'react'
import Logos from '../components/Logos/Logos'
import Vedio from '../components/Vedio/Vedio'
import Footer from '../components/Footer/Footer'
import HeroComponent from '../components/HeroComponent/HeroComponent'
import Questions from '../components/Questions/Questions'
import Benefits from '../components/Benefits/Benefits'
import Testimonials from '../components/Testimonials/Testimonials'
import OurPricing from '../components/OurPricing/OurPricing'
import OurCourses from '../components/OurCourses/OurCourses'
import NavBar from '../components/NavBar/NavBar'


function Home(){
    
    return (
        <div>
            <NavBar/>
            <HeroComponent />
            <Logos/>
            <Vedio/>
            <Benefits/>
            <OurCourses/>
            <Testimonials/>
            <OurPricing showTitle={true}/>
            <Questions/>
            <Footer/>
        </div>
    )
}

export default Home
