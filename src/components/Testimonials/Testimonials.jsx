import React from 'react'
import './Testimonials.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'
import { TestimonialsData } from '../../Data/TestimonialsData'
function Testimonials() {
    return (
        <div className='TestimonialsSection contianer-x' id='testimonials'>
            <TitleComponent
            title={"Our Testimonials"} 
            desc={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
            showButton={true}
            />
            <div className='TestimonialsCards'>
                {TestimonialsData.map ((item,index) => (
                    <TestimonialsCard desc={item.desc} image={item.image} Name={item.name}  TestimonialsClass={"TestimonialsCard"}/>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
