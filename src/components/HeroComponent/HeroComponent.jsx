import React from 'react'
import './HeroComponent.css'
import lightning from '../../assets/images/lightning.svg'
import lines from '../../assets/images/lines.svg'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
function HeroComponent() {
    return (
        <div className='hero' id='hero'>
                <div className='H-Title'>
                    <div className="lines">
                        <img src={lines} alt="lines" />
                    </div>
                    <div className='H-Title-Img'> 
                        <img src={lightning} alt=" lightning image" />
                    </div>
                    <h1 className='fontsize48 weight-600'><span>Unlock</span> Your Creative Potential</h1>
                </div>
                <div className='H-Des'>
                    <h2 className='weight-500'>With Online Design and Development Courses.</h2>
                    <p className='fontsize18 weight-400'>Learn from Industry Experts and Enhance Your Skills.</p>
                </div>
                <div className='H-buttons'>
                    <ButtonComponent textBtn={"Explore Courses"} path={"/#OurCourses"}/>
                    <ButtonComponent textBtn={"View Pricing"} path={"/#pricing"}/>
                </div>
        </div>
    )
}

export default HeroComponent
