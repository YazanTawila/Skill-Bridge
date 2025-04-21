import React from 'react'
import './TitleComponent.css'
import { Link } from 'react-router-dom'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
function TitleComponent({showButton,title,desc }) {
    return (
        <div className='Title ' >
            <div className='TitleContent'>
                <div className='TitleText'>
                    <h2 className='fontsize48 weight-500'>{title}</h2>
                    <p className='fontsize18 weight-400'>{desc}</p>
                </div>
                {showButton && <ButtonComponent textBtn={"View All"}/>}
            </div>
        </div>
    )
}

export default TitleComponent
