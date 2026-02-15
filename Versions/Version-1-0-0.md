# Grandioso Elefante Circo – Frontend Project

## Introduction

Single-page frontend project built with HTML, CSS, and JavaScript, focusing on semantic structure, responsive layout, and a custom image carousel. The code demonstrates practical CSS layout handling, responsive behavior with media queries, and basic interactive UI logic without frameworks.

## Project Specification

This project represents a small, self-contained frontend website for a fictional circus brand. The project intentionally avoids frameworks to focus on the **Core Web Fundamentals**.
The goal is to demonstrate:

      • Correct use of semantic HTML
      • Responsive layouts using CSS Flexbox and Grid
      • Visual effects and transitions in CSS
      • A JavaScript driven image slideshow with jQuery Hamburger menu
      • Form handling with native HTML validation

## Technology Used

      • HTML5 (semantic elements)
      • CSS3 (Flexbox, Grid, media queries, transitions)
      • JavaScript (ES5/ES6) for UI interaction
      • Font Awesome for icons
      • Google Fonts for typography

External libraries are limited to Font Awesome and jQuery (hamburger menu).

## Project Structure

          ├── index.html                    # Main HTML document
          ├── styles.css                    # Main stylesheet
          ├── main.js                       # JavaScript for navigation and carousel
          ├── img/                          # Image assets

## HTML Structure

      • Uses semantic elements such as header, nav, section, article, and footer
      • Navigation links reference page sections via anchor links
      • Content is grouped into logical sections:
          ◦ Hero / banner
          ◦ Things to do
          ◦ Featuring artists
          ◦ Events carousel
          ◦ About section
          ◦ Booking form
      • Images include descriptive alt attributes
      • Booking form uses native HTML validation (required, type, min, max)

## CSS Overview

### Layout

      • Flexbox is used for navigation, banners, cards, and footer
      • CSS Grid is used for responsive image layouts
      • Media queries for different screen sizes

### Responsive Design

      • Mobile and desktop layouts are supported
      • Breakpoints at 576px, 768px, 992px to adjust layout and navigation
      • Navigation switches from hamburger menu to horizontal menu on larger screens

### Visual Styling

      • Custom color palette
      • CSS transitions and hover effects for interactivity
      • Overlay effects in the featuring section
      • Background images with gradients for visual depth

## Events Carousel

      • Custom-built slideshow using HTML, CSS, and JavaScript
      • Slides are hidden/shown dynamically
      • Navigation controls:
          ◦ Previous / next arrows
          ◦ Clickable dots for direct navigation
      • Captions are positioned over images using absolute positioning

The carousel demonstrates understanding of positioning, stacking context, and basic UI state handling.

## JavaScript Functionality

      • Handles:
          ◦ Mobile navigation toggle
          ◦ Slideshow navigation and state
      • Uses global functions for simplicity
      • Inline event handlers connect UI elements to slideshow logic

The JavaScript is intentionally minimal and readable, suitable for small projects.

## Future Changes

      • [ ] From Desktop First to Mobile First CSS Layout
      • [ ] ARIA/ WCAG implementation
      • [ ] Convert basic jquery/javascript ES5 to JavaScript ES6+
