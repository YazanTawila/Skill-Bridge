import React from 'react'
import './Benefits.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import BenefitsCard from '../BenefitsCard/BenefitsCard'
import { BenefitsData } from '../../Data/Benefits'
function Benefits() {
    return (
        <div className='BenefitsSection contianer-x' id='benefit'>
            <div className='BenefitsContent'>
                <TitleComponent
                title={"Benefits"} 
                desc={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
                showButton={true}
                />
                <div className='BenefitsCards'>
                    {BenefitsData.map((item,index) => (
                        <BenefitsCard
                            key={index}
                            number={item.number}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefits
