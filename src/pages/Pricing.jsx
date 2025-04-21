import React from 'react'
import Hero2Component from '../components/Hero2Component/Hero2Component'
import { pricing } from '../Data/HeroData'
import Footer from '../components/Footer/Footer'
import Questions from '../components/Questions/Questions'
import OurPricing from '../components/OurPricing/OurPricing'
import NavBar from '../components/NavBar/NavBar'

function Pricing() {
    return (
        <div>
            <NavBar/>
            <Hero2Component heroTitle={pricing.title} heroDesc={pricing.desc}/>
            <OurPricing showTitle={false}/>
            <Questions/>
            <Footer/>
        </div>
    )
}

export default Pricing
