import React from 'react'
import './CourseCard.css'
import { Link } from 'react-router-dom'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
function CourseCard({title,desc,image1,image2,image3,duration,level,coach,Curriculum,path}) {
    return (
            <div className='CourseCard'>
                <div className='CourseCardTop'>
                    <div className='C-title'>
                        <h3 className='fontsize24 weight-600'>{title}</h3>
                        <p className='fontsize18 weight-400'>{desc}</p>
                    </div>
                    <ButtonComponent textBtn={"View Course"} path={path}/>
                </div>
                <div className='CourseCardMiddle'>
                    <div className='C-images'>
                        <div>
                            <img src={image1} alt="cours image" />
                        </div>
                        <div>
                            <img src={image2} alt="cours image" />
                        </div>
                        <div>
                            <img src={image3} alt="cours image" />
                        </div>
                    </div>
                    <div className='C-About'> 
                        <div className='C-AboutDL'>
                            <span className='fontsize18 weight-400'>{duration}</span>
                            <span className='fontsize18 weight-400'>{level}</span>
                        </div>
                        <p className='fontsize20 weight-500'>{coach}</p>
                    </div>
                </div>
                <div className='CourseCardBottom'>
                    <div className='C-BottomTitle'>
                        <h3>Curriculum</h3>
                    </div>
                    <div className='C-BottomAbout'>
                        {Curriculum?.map((Culum,index) => (
                            <div className='C-BottomNum'>
                                <span className='sizeNum50 weight-800'>{Culum.Num}</span>
                                <p className='fontsize18  weight-400'>{Culum.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default CourseCard