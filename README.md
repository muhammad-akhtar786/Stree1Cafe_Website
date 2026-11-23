# Street 1 Cafe website

Static site. No build step, no install.

## Run
Open `index.html` in a browser, or serve the folder (`python3 -m http.server`).

## Structure
- index.html : markup and all copy (nav, hero, menu, experience, story, reviews, gallery, visit, footer)
- css/styles.css : design tokens (palette in :root), layout, 3D and animation styles
- js/main.js : menu and gallery data, lightbox, scroll reveals, tilt, cursor glow, particles
- images/ : put real photos here, then replace the `.ph` placeholders in index.html and js/main.js

## Tech
HTML5, CSS3 (custom properties, grid, flexbox, 3D transforms, keyframes, clip-path),
vanilla JavaScript (IntersectionObserver, Canvas 2D, requestAnimationFrame),
Google Fonts (Cormorant Garamond, Hanken Grotesk), Google Maps embed iframe.
