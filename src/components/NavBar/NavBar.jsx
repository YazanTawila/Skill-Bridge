import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { FiArrowRight } from "react-icons/fi";
import logo from '../../assets/images/logo.svg'
import bars from '../../assets/images/bars.svg'
import { HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { NavData } from '../../Data/NavData';

function NavBar() {
    const location = useLocation();
    const [isOpen , setIsOpen] = useState(false)
    const handlopen = () => {
        setIsOpen(!isOpen)
    }
    const handleLinkClick = (path) =>{
        setIsOpen(false);
        scrollTop(true)
    }
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 72) { 
        setIsFixed(true);
        } else {
        setIsFixed(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () =>{
        window.scrollTo({
            top:0, 
            behavior:'smooth'
        })
    };
    return (
            <>
                <header>
                    
                <div className="topNav weight-400">
                    <div className="topNavContent fontsize18">
                        <span>Free Courses 🌟 Sale Ends Soon, Get It Now </span> <FiArrowRight/>
                    </div>
                </div>
                <nav className={`navBar contianer-x ${isFixed ? "fixed " : ""}`}>
                    <Link to={'/'}><img src={logo} alt="skill bridge logo" /></Link>
                    
                    <div className='navLinks'>
                        <ul className={`nav-ul ${isOpen ? "open" : ""}`}>
                            {NavData.map((item,index) => (
                                <li key={item.id}>
                                    <Link 
                                    onClick={() => handleLinkClick(item.path)}
                                    to={item.path} 
                                    className={`fontsize18 weight-400 ${location.pathname === item.path ? "activlink" : ""}`}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="buttons ">
                            <Link to={'/SignUp'} onClick={scrollTop} className='fontsize18 weight-400 vv'>Sign Up</Link>
                            <Link to={'/Login'} onClick={scrollTop}   className='fontsize18 weight-400' >Login</Link>
                        </div>
                        <img src={bars} alt="" className='bars' onClick={handlopen}/>
                    </div>
                </nav>
                </header>
            </>
    )
}

export default NavBar
