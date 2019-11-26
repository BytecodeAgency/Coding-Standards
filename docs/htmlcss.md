---
id: htmlcss
title: HTML, CSS and CSS Preprocessors
sidebar_label: HTML, CSS
---

**Avoid using plain HTML/CSS where possible**

## HTML

* Don't use inline styling or inline Javascript
* Don't import styling using `@import`, use `<link>` in your `<head>`
* Use double quotes like `<a href="#">`, not single quotes like `<a href='#'>`
* Make us of the HTML5 elements `<article>, <nav>, <aside>, <details>, <header>, <footer>, <section>`, instead of `<div>` where appropriate.
* _Only_ leave an empty line between parts of the page, like the navigation, or `<section>` tags

## CSS

* Try not to use CSS, rather use SASS/SCSS, and try to avoid CSS frameworks
* When working with ReactJS, the use of [Styled Components](https://www.styled-components.com/) is encouraged over plain CSS/SCSS
* If you are using another framework that uses px-units, use px, else use rem-values *(rem values scale with the HTML-object's font-size, which makes responsive typography a whole lot easier)*
* If the project allows it, write your media queries mobile first, like `@media (min-width: 30rem)`
* If a `:hover` pseudo class is styled, style `:focus` the same for accessibility
* Try to never use IDs as selector, use classes
* Avoid using `!important` where possible
* Use [BEM](http://getbem.com/naming/) for naming CSS classes
* Use only one declaration per line, this makes the code more readable
* Add a space after the colon of a declaration, so not `margin:1rem;` but `margin: 1rem;`
* For font-sizes, use an exponential scale, preferably based on the Fibonacci number (1.618) [Click here to geek out](https://3.7designs.co/blog/2010/10/how-to-design-using-the-fibonacci-sequence/).
* For colors, use hex values (not rgb or rgba), as short as possible, and in lowercase, for example: not `#FFFFFF` but `#fff`
* A zero (0) should not have unit
* Avoid using floats. Use CSS Grid or Flexblx instead
* If you are writing emails, use of the MJML preprocessor is encouraged

## CSS preprocessors

* Currently, SCSS is preferred for a project (if the project is not written in React)
* Do not use extends, but use mixins
* Don't go and add prefixes by hand or by using mixins. Instead, let a compiler/plugin handle this for you
* Try to avoid nesting, rather use BEM. Use of nesting is mostly resticted to :hover-states etc.
* When you do nest, make it at most 3 levels deep
* Provide the media queries rules inside the element
* Break files out into small modules
* For shameful code, use the *_shame.scss file*. We all have to do this sometimes, better own up to it. [More Geeky links](https://csswizardry.com/2013/04/shame-css/)
