import React from 'react'
import './ButtonComponent.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function ButtonComponent({textBtn ,path}) {
    const scrollTop = () =>{
        window.scrollTo({
            top:0, 
            behavior:'smooth'
        })
    };
    return (
        <HashLink onClick={scrollTop} className='fontsize18 weight-500 ButtonComponent' to={path} >{textBtn}</HashLink>
    )
}

export default ButtonComponent
