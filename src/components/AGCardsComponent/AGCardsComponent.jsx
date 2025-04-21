import React from 'react'
import './AGCardsComponent.css'
import AGCard from '../AGCard/AGCard'
import { AchievementsAndGoals } from '../../Data/AchievementsGoals'
function AGCardsComponent({data}) {
    return (
        <div className='AGCardsComponent '>
            {data.map((item,index) => (
                <AGCard
                    key={index}
                    image={item.img}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    )
}

export default AGCardsComponent
