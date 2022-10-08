# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](./assets/screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

(./assets/screenshots)


### Links

- Solution URL: (https://github.com/Wizzy-05/Space)
- Live Site URL: (https://space.vercel.app)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://beta.reactjs.org/) - JS library
- [Sass](https://sass-lang.com) - CSS Preprocessor 


### What I learned

```JSX
    <div className="pick-destination">
        <span>01</span>
        <p>PICK YOUR DESTINATION</p>
    </div>
```
```scss
    nav {
        @include flex;
        align-items: center;
        width: 100%;
        height: 80px;
        background: rgba(255, 255, 255, 0.076);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        position: relative;
    }
```
```js
      {destinationsData.map(destination => {
          return (
              <span key={uuidv4()} onClick={() => handleClick(destination)} className={planets.planet === destination.name ? "activePlanet" : ""}>{destination.name}</span>
          )
      })}
```



### Continued development

- Css Grid
- Sass functions
- React Routers


### Useful resources

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**
- [Example resource 1](https://reactrouter.com/en/main/route): This helped me while routing. I'll Like to work with it in upcoming projects.
- [Example resource 2](https://sass-lang.com) - This really helped me as this is my first project with sass.

## Author
- Frontend Mentor - [@Wizzy-05](https://www.frontendmentor.io/profile/Wizzy-05)
- Twitter - [@yourusername](https://twitter.com/ahuzi_wisdom)


## Acknowledgments
I really appreciate my mentor Harry.


