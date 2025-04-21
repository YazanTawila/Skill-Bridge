import React, { useState } from 'react'
import './Vedio.css'
import img1 from '../../assets/images/videoPic.png'
import icon from '../../assets/images/start.svg'

function Vedio() {
    const [isVideoPlaying , setIsVideoPlaying] = useState(false);

    return (
            <div className="Vedio-And-Thumbnail contianer-x">
                {isVideoPlaying ? (
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/F0sqfPkCcyM?si=q-Ngh_T8RC9Piyls" title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                    ) : (
                    <div className="Thumbnail">
                        <div></div>
                        <div className='image' onClick={() => setIsVideoPlaying(true)}></div>
                        <button onClick={() => setIsVideoPlaying(true)} className='Thumbnail-Btn'><img src={icon} alt=""/></button>
                    </div>
                )}
            </div>
    )
}
export default Vedio
