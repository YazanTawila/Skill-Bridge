import React from 'react'
import './Logos.css'
import { LogosData } from '../../Data/LogosData'
import Marquee from 'react-fast-marquee'

function Logos() {
    return (
        <div className='logos contianer-x'>
            <div className="logos-Content">
                <Marquee autoFill>
                    {LogosData.map((logo,index) => (
                        <img src={logo.img} alt=" logo" />
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Logos
