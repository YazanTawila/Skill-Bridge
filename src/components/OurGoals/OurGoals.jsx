import React from 'react'
import './OurGoals.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import AGCardsComponent from '../AGCardsComponent/AGCardsComponent'
import { OurGoalsData } from '../../Data/OurGoals'

function OurGoals() {
    return (
        <div className='OurGoals contianer-x' id="ourgoals">
            <TitleComponent
            title={"Our Goals"} 
            desc={"At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to"}
            />
            <AGCardsComponent data={OurGoalsData}/>
        </div>
    )
}

export default OurGoals
