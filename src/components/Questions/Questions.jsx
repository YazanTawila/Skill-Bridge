import React, { useState } from 'react'
import './Questions.css'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Accrodion } from '../../Data/Accrodion';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

function Questions() {
    const [active , setActive] = useState (null)

    const toggle = (i) => {
        if (active == i) {
            if (active) {
                return setActive(null)
            }
        }
        setActive(i);
    }
    return (
        <div className='QuestionsSection contianer-x' id='questions'>
            <div className='QuestionContent'>
                <div className="QCleft">
                    <div className="QCleftTitle">
                        <h3 className='fontsize48 weight-600'>Frequently Asked Questions</h3>
                        <p className='fontsize18 weight-400'>Still you have any questions? Contact our Team via support@skillbridge.com</p>
                    </div>
                    <ButtonComponent textBtn={"See All FAQ's"}/>
                </div>
                <div className="QCAcc">
                    {Accrodion.map((item, i) => {                        
                    return (
                    <div className="AccItem" key={i}>
                        <div className="AccItemTitle" onClick={() => toggle(i)}>
                            <h4 className='fontsize20 weight-500'>{item.question}</h4>
                            <span>{active === i ? <FaMinus /> : <FaPlus />  }</span>
                        </div>
                        <div className={active === i ? 'AccShow fontsize18' : 'AccItemContent fontsize18'}>{item.answer}</div>
                    </div>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Questions
