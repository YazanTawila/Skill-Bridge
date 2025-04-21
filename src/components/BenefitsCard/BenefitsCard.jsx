import React from 'react'
import './BenefitsCard.css'
import { Link } from 'react-router-dom'
import icon from '../../assets/images/topRightArrow.svg'
function BenefitsCard({number,title,desc}) {
    return (
        <div className='BenefitsCard scale'>
            <span className='sizeNum80 weight-700'>{number}</span>
            <div className='BenefitsCardText'>
                <h3 className='fontsize24 weight-600'>{title}</h3>
                <p className='fontsize18 weight-400'>{desc}</p>
            </div>
            <Link className='BenefitsCardIcon'><img src={icon} alt="arrow icon" /></Link>
        </div>
    )
}

export default BenefitsCard
