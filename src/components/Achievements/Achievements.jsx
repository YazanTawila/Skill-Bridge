import React from 'react'
import './Achievements.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import AchievementsGoals from '../AGCard/AGCard'
import { AchievementsAndGoals } from '../../Data/AchievementsGoals'
import AGCardsComponent from '../AGCardsComponent/AGCardsComponent'
function Achievements() {
    return (
        <div className='Achievements contianer-x' id="achievements">
            <TitleComponent
            title={"Achievements"} 
            desc={"Our commitment to hvv has led us to achieve significant milestones along our journey. Here are some of our notable achievements"}/>
            <AGCardsComponent data={AchievementsAndGoals}/>
        </div>
    )
}

export default Achievements
