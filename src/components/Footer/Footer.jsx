import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.svg'
import location from '../../assets/images/location.svg'
import email from '../../assets/images/email.svg'
import phone from '../../assets/images/phone.svg'
import { Link } from 'react-router-dom'
import { SocialData } from '../../Data/Social'
import { HashLink } from 'react-router-hash-link'
function Footer() {
    const scrollTop = () =>{
        window.scrollTo({
            top:0, 
            behavior:'smooth'
        })
    };
    return (
        <div className='Footer contianer-x'>
            <div className="Footer-content">
                <div className="F-left">
                    <Link onClick={scrollTop}  to={'/'}><img src={logo} alt="skill bridge logo" /></Link>
                        <div className="F-left-contact">
                            <span><img src={email} alt="email image" /> hello@skillbridge.com</span>
                            <span><img src={phone} alt="phone image" /> +91 91813 23 2309</span>
                            <span><img src={location} alt="location image" /> Somewhere in the World</span>
                        </div>
                </div>
                <div className="F-right">
                    <div >
                        <div className='F-links'>
                            <HashLink onClick={scrollTop} to={"/"}>Home</HashLink>
                            <HashLink to={"/#benefit"}>Benefits</HashLink>
                            <HashLink  to={"/#OurCourses"}>Our Courses</HashLink>
                            <HashLink to={"/#testimonials"}>Our Testimonials</HashLink>
                            <HashLink to={"/#questions"}>Our FAQ</HashLink>
                        </div>
                    </div>
                    <div>
                        <div className='F-links'>
                            <HashLink onClick={scrollTop} to={"/about"}>About Us</HashLink>
                            <HashLink>Company</HashLink>
                            <HashLink to={"/about/#achievements"}>Achievements</HashLink>
                            <HashLink to={"/about/#ourgoals"}>Our Goals</HashLink>
                        </div>
                    </div>
                    <div>
                        <h4>Social Profiles</h4>
                        <div className='F-social'>
                            {SocialData.map((e,index) => (
                                <Link to={e.path} key={e.id}>
                                    {e.img}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='F-end'>
                <p>© 2023 Skillbridge. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
