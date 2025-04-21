import React from 'react'
import Hero2Component from '../components/Hero2Component/Hero2Component'
import { contact } from '../Data/HeroData'
import Footer from '../components/Footer/Footer'
import ContactForm from '../components/ContactForm/ContactForm'
import NavBar from '../components/NavBar/NavBar'

function Contact() {
    return (
        <div>
            <NavBar/>
            <Hero2Component heroTitle={contact.title} heroDesc={contact.desc}/>
            <ContactForm/>
            <Footer/>
        </div>
    )
    }

export default Contact
