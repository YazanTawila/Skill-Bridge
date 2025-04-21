import React from 'react'
import './CoursesHomeCard.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
function CoursesHomeCard({CardImage,duration,level,coach,title,desc,path}) {
    const scrollTop = () =>{
        window.scrollTo({
            top:0, 
            behavior:'smooth'
        })
    };
    return (
        
        <div className='CoursesCard'>
            <div className='CoursesCardImg'>
                <img src={CardImage} alt="card image" />
            </div>
            <div className='CardContent'>
                <div className='CardContentAbout'>
                    <div  className='CardAboutSpan fontsize18 weight-400'>
                        <span>{duration}</span>
                        <span>{level}</span>
                    </div>
                    <p className='fontsize20 weight-500'>{coach}</p>
                </div>
                <div className='CardContentTitle'>
                    <h3 className='fontsize24 weight-600'>{title}</h3>
                    <p className='fontsize18 weight-400'>{desc}</p>
                </div>
            </div>
            <HashLink onClick={scrollTop}  className='fontsize18 weight-500' to={path}>Get it Now</HashLink>
        </div>
        
    )
}

export default CoursesHomeCard
