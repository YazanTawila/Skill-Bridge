import React, { useState } from 'react'
import './LogAndSign.css'
import googleicon from '../../assets/images/googleIcon.svg'
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
function LogAndSign({action}) {
        const title = action === "login" ? "Login" : "Sign Up";
        const desc = action === "login"
        ? "Welcome back! Please log in to access your account."
        : "Create an account to unlock exclusive features.";
        const [show,setShow] = useState(false)
        const handleClick = () => {
            setShow(!show)
        }
    return (
        <div className='LogAndSign '>
            <div className='LogAndSignTitle'>
                <h3 className='fontsize48 weight-600'>{title}</h3>
                <p className='fontsize18 weight-400'>{desc}</p>
            </div>
            
            <div className='Loginform'>
                {action === "sign up" && <div className='LoginGroub'>
                    <label htmlFor="name" className='fontsize18 weight-500'>Full Name</label>
                    <input type="text" id='name' placeholder='Enter your Name' className='fontsize18 weight-400'/>
                </div>}
                <div className='LoginGroub'>
                    <label htmlFor="email" className='fontsize18 weight-500'>Email</label>
                    <input type="email" id='email' placeholder='Enter your Email' className='fontsize18 weight-400'/>
                </div>
                <div  className='LoginGroub'>
                    <label htmlFor="Password" className='fontsize18 weight-500'>Password</label>
                    <div className='passwordDiv'>
                        <input type={show ? "text": "password"} id='Password' placeholder='Enter your Password' className='fontsize18 weight-400'/>
                        <i onClick={handleClick}>{!show ? <IoMdEye /> : <IoIosEyeOff />}</i>
                    </div>
                    {action === "login" && <span className=' fontsize18 weight-400'>Forgot Password?</span>}
                </div>
                <div className='checkbox'>
                    <input type="checkbox" id="checkbox" />
                    {action === "login"? (<label htmlFor="checkbox" className='fontsize18 weight-400'>Remember Me</label>) : <label htmlFor="checkbox"  className='fontsize18 weight-400'>I agree with <span>Terms of Use</span> and <span>Privacy Policy</span></label>}
                </div>
                <button className='fontsize18 weight-500'>{title}</button>
            </div>
            <div className='ORform'>
                <span className='OrSpan fontsize18 weight-400'>OR</span>
                <button className='fontsize18 weight-500'><img src={googleicon} alt="google icon" />{title} with Google</button>
                <p className='fontsize18 weight-400'>Don't have an account? {action === "sign up" ? ( <Link to={"/Login"}>login <GoArrowUpRight /></Link>) : (<Link to={"/SignUp"}>sign up <GoArrowUpRight /> </Link>) } </p>
            </div>
        </div>
    )
}

export default LogAndSign
