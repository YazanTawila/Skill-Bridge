import React from 'react'
import Footer from '../components/Footer/Footer'
import LoginSign from '../components/LoginSign/LoginSign'
import NavBar from '../components/NavBar/NavBar'

function SiginUp() {
    return (
        <div>
            <NavBar/>
            <LoginSign action={"sign up"}/>
            <Footer/>
        </div>
    )
}

export default SiginUp
