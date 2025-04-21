import React, { useState } from 'react'
import './OurPricing.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import PricingCard from '../PricingCard/PricingCard'
import { PricingData } from '../../Data/Pricing'
function OurPricing({showTitle}) {
    const [billingCycle, setBillingCycle] = useState("monthly");
    return (
        <div className='OurPricing contianer-x' id='pricing'>
            <div className='OurPricingTitle'>
                {showTitle && <TitleComponent 
                title={"Our Pricing"}
                desc={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."}
                showButton={false}/>}
                <div className="PricingBtns">
                    <button className={billingCycle === "monthly" ? "active" : ""} onClick={() => setBillingCycle("monthly")}>Monthly</button>
                    <button className={billingCycle === "yearly" ? "active" : ""} onClick={() => setBillingCycle("yearly")}>Yearly</button>
                </div>
            </div>
            <div className="plans-container">
                {PricingData.map((plan, index) => (
                    <PricingCard 
                        key={index} 
                        plan={plan} 
                        billingCycle={billingCycle} 
                    />
                ))}
            </div>
        </div>
    )

} 

export default OurPricing
