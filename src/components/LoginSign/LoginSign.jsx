import React from 'react'
import './LoginSign.css'
import LogAndSign from '../LogAndSign/LogAndSign'
import Students from '../Students/Students'

function LoginSign({action}) {
    return (
        <div className='LoginSign contianer-x'>
            <Students/>
            {action === "login" ? (<LogAndSign action={"login"}/>) : (<LogAndSign action={"sign up"} />) }
        </div>
    )
}

export default LoginSign
