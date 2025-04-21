import React from 'react'
import Footer from '../components/Footer/Footer'
import LoginSign from '../components/LoginSign/LoginSign'
import NavBar from '../components/NavBar/NavBar'


function Login() {
    return (
        <div>
            <NavBar/>
            <LoginSign action={"login"}/>
            <Footer/>
        </div>
    )
}

export default Login
