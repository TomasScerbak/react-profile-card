import React from 'react'
import twitter from '../Images/Twitter Icon.png'
import facebook from '../Images/Facebook Icon.png'
import instagram from '../Images/Instagram Icon.png'
import github from '../Images/GitHub Icon.png'

export default function Footer() {
    return(
        <footer>
            <img className='media-image' src={facebook} alt='facebook link'/>
            <img className='media-image' src={twitter} alt='twitter link'/>
            <img className='media-image' src={instagram} alt='instagram link'/>
            <img className='media-image' src={github} alt='github link'/>
        </footer>
    )
}