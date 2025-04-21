import React from 'react'
import './TestimonialsCard.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

function TestimonialsCard({desc,image,Name,TestimonialsClass}) {
    return (
        <div className={TestimonialsClass}>
            <div className='CardTop'>
                <p className='fontsize18 weight-400'>{desc}</p>
            </div>
            <div className='CardBottom'>
                <div className='CardBottomContent'>
                    <img src={image} alt="Testimonials Photo" />
                    <span className='fontsize18 weight-600'>{Name}</span>
                </div>
                <ButtonComponent textBtn={"Read Full Story"}/>
            </div>
        </div>
    )
}

export default TestimonialsCard
