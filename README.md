# Grandioso Elefante Circo – Frontend Project

## Project Introduction

Single-page frontend project built with HTML, CSS, and JavaScript, focusing on semantic structure, responsive layout, and a custom image carousel. The code demonstrates practical CSS layout handling, responsive behavior with media queries, and basic interactive UI logic without frameworks.

## Project Specification

This project represents a small, self-contained frontend website for a fictional circus brand. The project intentionally avoids frameworks to focus on the **Core Web Fundamentals**.
The goal is to demonstrate:

      • Correct use of semantic HTML
      • Responsive layouts using CSS Flexbox and Grid
      • Visual effects and transitions in CSS
      • A JavaScript driven image slideshow with jQuery Hamburger menu
      • Form handling with native HTML validation

## Version Number: 1.1.0 (Implements Mobile First Approach)

      • First Version - Checkout the 'ReadMe' file for detailed description of [V 1.0.0](/Versions/Version-1-0-0.md) here
                  ◦  Description of 'ReadMe' includes HTML Structure, CSS Overview, JavaScript Functionality

### Changes made in this Version

      • Earlier used Desktop First Approach - Now considering changing technology trends, switched to Mobile First Approach. Reason: Faster loading on mobiles as default mobile styles implemented by default. For larger screens media queries implemented as needed
      • Use CSS
            ◦ Replace fixed values with the Relative values (px to rem) where 16px = 1rem by default
            ◦ Use Latest CSS Features: Clamp(),aspect-ratio, gap(Flexbox) 95+% global usage (refer: caniuse.com)
            ◦ Uses Display: contents --- Global support:- 10.82% (Complete) + 85.01%(Partial) = 95.83%

<!-- Comment -->
<!-- display: contents - New CSS feature which allows you to treat children of flex item or children of grid item just like they are flex/grid items themselves. -->

      • Fixes minor bugs:
            ** CSS **
                  ◦ Added Logo/background-color on larger screen.
                  ◦ Implemented truely responsive fonts and images.
                  ◦ Sections made more presentable on smaller screen sizes.
                  ◦ Changed landing hero/banner image.

            ** HTML **
                  ◦ Font family added for about section
                  ◦ Minor text corrections

## Technology Used

      • HTML5 (semantic elements)
      • CSS3 (Flexbox, Grid, media queries, transitions)
      • JavaScript (ES5/ES6) for UI interaction
      • Font Awesome for icons
      • Google Fonts for typography

External libraries are limited to Font Awesome and jQuery (hamburger menu).

## Project Structure

            ├── index.html                    # Main HTML document
            ├── styles-mf.css                 # Main stylesheet
            ├── main.js                       # JavaScript for navigation and carousel
            ├── img/                          # Image assets

## Future Changes

      • [X] From Desktop First to Mobile First CSS Layout
      • [ ] ARIA / WCAG implementation
      • [ ] Convert basic jquery/javascript ES5 to JavaScript ES6+
      • [ ] Convert JavaScript ES6+ to TypeScript

## Reason For This Update

CSS Changes
: From Desktop First to Mobile First CSS Layout
