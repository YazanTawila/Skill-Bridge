import React from 'react'
import './Students.css'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'
import { TestimonialsData } from '../../Data/TestimonialsData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from '../../assets/images/NextArrow.svg'
import PrevArrow from '../../assets/images/PrevArrow.svg'
function Students() {
    
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div className='StudentsSection'>
            <div className="StudentsTitle">
                <h2 className='weight-500'>Students Testimonials</h2>
                <p className='fontsize18 weight-400'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. 
                    Ac cum eget habitasse in velit fringilla feugiat senectus in.
                </p>
            </div>
            <div>
            <Slider {...settings}>
                {TestimonialsData.map((item,index) => (
                    <TestimonialsCard desc={item.desc} image={item.image} Name={item.name} TestimonialsClass={"TestimonialsCarousel"}/>
                ))}
            </Slider>
            </div>
        </div>
    )
}

export default Students
