# Bookmark landing page

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot
![desktop-preview](https://github.com/myers32/Bookmark-landing-page/assets/122280628/bd0cff59-d314-43c2-85a7-b11851bb4b58)

### Links

- Solution URL: [Bookmark landing page](https://myers32.github.io/Bookmark-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- [Sass](https://sass-lang.com/): Syntactically Awesome Style Sheets 
- Basic JavaScript
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
  
### What I learned

I figured out how to access and change the .svg image color in CSS.

```css
  path {
    stroke: var(--softred);
  }
```

I used keyframes for creating animation when fading in text at faqs section.

```css
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(u.rem(-10));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

I learned forEach loop and used it to aim all accordion items and add some listener on click.

```js
  const accordion = () => {
    const faqs = document.querySelectorAll(".faqs__accordion--item");

    faqs.forEach(faq => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
  };
```

I learned creating one function that initialize my all needed functions at once.

```js
  const init = () => {
    menu();
    changeUnderline();
    changeDisplay();
    accordion();
  };
```

### Continued development
In the future I want to focus on learing how to create more advanced animations.
Also I want to upgrade my knowledge in JS from beginner to more advanced. 

### Useful resources

- [CSS-Tricks](https://www.css-tricks.com) - This helped me a lot at creating this code. It has really interesting articles where everything I needed was explained in beginner friendly manner. I really enjoyed helping myself with this website when creating this code.

## Author

- [Dawid Osiński](https://github.com/myers32)
