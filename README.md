
# Frontend Mentor - Grid landing page solution

This is a solution to the [Grid landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/grid-landing-page). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- Open and close the navigation menu at any screen size using JavaScript
- Experience a clean 2-column desktop grid for stats alongside a full-height hero card

### Screenshot

![](./assets/images/screenshot.jpg)

### Links

- Solution URL: [Add your repository link here](https://github.com/tsegadesire/grid-landing-page)
- Live Site URL: [Add your live URL here](https://responsive-grid-landing-page.vercel.app.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid & Flexbox
- Mobile-first responsive media queries
- Vanilla JavaScript (for navigation menu toggle)
- Google Fonts (`Inter`)

### What I learned

Throughout this project, I strengthened my understanding of CSS Grid layouts, particularly managing uneven grid structures with fixed row spans and clean grid borders without double-width overlaps:

```css
/* Hero card spanning full 2 rows of the grid */
.card {
  grid-row: 1 / 3;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

/* Precise grid layout for statistics cards */
.infoboard {
  display: grid;
  grid-template-columns: 45% 27.5% 27.5%;
  grid-template-rows: 1fr 1fr;
}