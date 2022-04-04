# React Static Profile Card

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Links

- Solution URL: [https://github.com/TomasScerbak/react-profile-card.git]
- Live Site URL: [https://tomasscerbak.github.io/react-profile-card/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Flexbox
- React JS

### What I learned

Learned how to import images and embedd them into code. Trained to separate components in separate JS files.


```js

import React from 'react'
import Header from '../src/Components/Header'
import Main from '../src/Components/Main'
import Footer from '../src/Components/Footer'

export default function App() {
    return(
        <div className='container'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

import React from 'react'
import twitter from '../Images/Twitter Icon.png'
import facebook from '../Images/Facebook Icon.png'
import instagram from '../Images/Instagram Icon.png'
import github from '../Images/GitHub Icon.png'

export default function Footer() {
    return(
        <footer>
            <a href="#"><img className='media-image' src={facebook} alt='facebook link'/></a>
            <a href="#"><img className='media-image' src={twitter} alt='twitter link'/></a>
            <a href="#"><img className='media-image' src={instagram} alt='instagram link'/></a>
            <a href="#"><img className='media-image' src={github} alt='github link'/></a>
        </footer>
    )
}
```

### Continued development

I will continue to use REACT and build REACT projects for further developement.


## Author

- Website - [Tomas Scerbak](https://tomasscerbak.github.io/tomas-scerbak-portfolio/)
- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)
