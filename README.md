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

- Solution URL: [https://github.com/TomasScerbak/first-react-static-page.git]
- Live Site URL: [https://tomasscerbak.github.io/first-react-static-page/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Flexbox
- React JS

### What I learned

Since this is my first REACT project I've learned how to start react app via npm to setup all the files, import react and react-dom. I also learned how to create reusable components and connect them together using import export. Also what are the main benefits of using REACT as library.


```js

import React from 'react'
import ReactDOM from 'react-dom'
import "./styles.css"
import App from '../src/app'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

import React from 'react'

export default function Main() {
    return (
        <div className='main'>
            <h1 className='main__heading'>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
```

### Continued development

I will continue to RECT and build REACT projects for further developement.


## Author

- Website - [Tomas Scerbak](https://tomasscerbak.github.io/tomas-scerbak-portfolio/)
- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)
