import React from 'react'
import headerImage from '../Images/profile-picture.png'
import emailImage from '../Images/Icon.png'
import linkedInImage from '../Images/Vector.png'

export default function Header() {
    return (
        <header>
            <img 
            className='header-image' 
            src={headerImage}
            alt="profile" />
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h4>laurasmith.website</h4>
            <div class="button-wrapper">
                <button className='btn btn--primary'><img className="email-image" src={emailImage} alt="#"/>Email</button>
                <button className='btn btn--secondary'><img className="linkedin-image" src={linkedInImage} alt="#"/>LinkedIn</button>
            </div>
        </header>
    )
}