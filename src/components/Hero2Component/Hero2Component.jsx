import React from 'react'
import './Hero2Component.css'
function Hero2Component({heroTitle , heroDesc}) {
    return (
        <div className='Hero2 contianer-x'>
            <div className="Hero2Content">
                <h1 className='fontsize48'>{heroTitle}</h1>
                <p className='fontsize18'>{heroDesc}</p>
            </div>
        </div>
    )
}

export default Hero2Component
