import React from 'react'
import './AGCard.css'

function AGCard({image,title,desc}) {
    return (
            <div className="AGCard">
                <div className="AGCardImg">
                    <img src={image} alt="card icon" />
                </div>
                <div className="AGCardText">
                    <h3 className='fontsize24 weight-500'>{title}</h3>
                    <p className='fontsize18 weight-400'>{desc}</p>
                </div>
            </div>
    )
}

export default AGCard
