import React from 'react'
import  './PricingCard.css'
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
function PricingCard({ plan, billingCycle }) {
        const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
        return (
        <div className="plan-card">
            <div className='PlanName'>
                <h3 className='weight-500' >{plan.name} Plan</h3>
            </div>
            <p className="price fontsize20 weight-500"><span className='pricespan sizeNum80 weight-600'>${price}</span>/ {billingCycle === "monthly" ? "month" : "year"}</p>
            <div className='Features'>
                <div className="FeaturesList">
                    <p className='fontsize20 weight-500'>Available Features</p>
                        <ul>
                            {plan.features.map((feature, index) => (
                                <li key={index}>
                                {feature.included ? <span  className='TrueCalss'><FaCheck/></span> : <span  className='FalseCalss'><FaXmark /></span>}{feature.text} 
                                </li>
                            ))}
                        </ul>
                </div>
                <button className='FeaturesBtn fontsize18 weight-600'>Get Started</button>
            </div>
        </div>
        );
}

export default PricingCard
