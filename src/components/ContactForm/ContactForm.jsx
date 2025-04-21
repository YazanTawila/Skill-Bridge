import React from 'react'
import './ContactForm.css'
import email from '../../assets/images/email.svg'
import phone from '../../assets/images/phone.svg'
import location from '../../assets/images/location.svg'
import { SocialData } from '../../Data/Social'
import { Link } from 'react-router-dom'
function ContactForm() {
    return (
        <div className='ContactForm contianer-x'>
            <div className='FormContent'>
                <div className="Form">
                    <div className="Form-group-1 ">
                        <div className="Group ">
                            <label className='fontsize18 weight-500' htmlFor="first-name">First Name</label>
                            <input className='fontsize18 weight-400' id='first-name' type="text" placeholder='Enter First Name' required/>
                        </div>
                        <div className="Group ">
                            <label className='fontsize18 weight-500' htmlFor="Last-name">Last Name</label>
                            <input className='fontsize18 weight-400' id='Last-name' type="text" placeholder='Enter Last Name' required/>
                        </div>
                    </div>
                    <div className="Form-group-2">
                        <div className="Group ">
                            <label className='fontsize18 weight-500' htmlFor="Email">Email</label>
                            <input className='fontsize18 weight-400' id='Email' type="email" placeholder='Enter your Email' required/>
                        </div>
                        <div className="Group ">
                            <label  className='fontsize18 weight-500' htmlFor="Phone">Phone</label>
                            <input className='fontsize18 weight-400' id='Phone' type="number" placeholder='Enter Phone Number' required/>
                        </div>
                    </div>
                    <div className="Group-Sub fontsize18">
                        <label className='fontsize18 weight-500' htmlFor="Subject">Subject</label>
                        <input className='fontsize18 weight-400' id='Subject' type="text" placeholder='Enter your Subject' required />
                    </div>
                    <div className="Group-text fontsize18">
                        <label className='fontsize18 weight-500' htmlFor="Message">Message</label>
                        <textarea className='fontsize18 weight-400' id="Message" placeholder='Enter your Message here...' rows={6} required></textarea>
                    </div>
                    <button type='submit' className="Form-btn fontsize18 weight-500">Send Your Message</button>
                </div>
                <div className="Contact">
                    <div className="contact-groub">
                        <div className='Contact-img'>
                            <img src={email} alt="" />
                        </div>
                        <span className='fontsize18 weight-400'>support@skillbridge.com</span>
                    </div>
                    <div className="contact-groub">
                        <div className='Contact-img'>
                            <img src={phone} alt="" />
                        </div>
                        <span  className='fontsize18 weight-400'>+91 00000 00000</span>
                    </div>
                    <div className="contact-groub">
                        <div className='Contact-img'>
                            <img src={location} alt="" />
                        </div>
                        <span className='fontsize18 weight-400'>Some Where in the World</span>
                    </div>
                    <div className="contact-groub">
                        <div className="contact-groub-social">
                            {SocialData.map((e,index) => (
                                <Link to={e.path} key={e.id}>
                                    {e.img}
                                </Link>
                            ))}
                        </div>
                        <span  className='fontsize18 weight-400' >Social Profiles</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
