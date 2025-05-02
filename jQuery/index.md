# jQuery
jQuery is a JavaScript library that was originally created in 2006 by John Resig. It is included in a project by linking the jQuery JavaScript with a `script` tag. With this done, the many functions defined by jQuery can be used to add JavaScript functionality more easily than vanilla JavaScript.

jQuery was created to make JavaScript easier to write and compatible with all browsers. This was really helpful for developers, and made jQuery a very popular library for web development. While jQuery is now thought of as "old" and "outdated" by some, it is still used in many of the most popular websites today. Modern improvements have been made to JavaScript , which is making many projects drop jQuery as a dependency. However, jQuery is still used to maintain older projects and used as a lighter weight alternative to modern frontend frameworks.

Along with vanilla JavaScript getting better, frontend libraries and frameworks like Next.js, React, Vue, and Angular have become extremely popular. These provide more features like components, state management, and more. With the adoption of frontend frameworks, jQuery has lost popularity for use in new sites, but it is still used by many websites and legacy systems.

jQuery is still worth learning because it is still used by many companies, and can speed up development for personal projects. I chose to learn it because I wanted a better way to add JavaScript to my Django projects, where I am already using the Django's Templating system and just want to add a little JavaScript for more frontend interactivity. As well as for use in personal projects, I see many jobs that ask for jQuery, and curiosity got the best of me.

To get started, include jQuery in your project through [download](https://jquery.com/download/),or [CDN](https://releases.jquery.com/), or [NPM](https://www.npmjs.com/package/jquery). [jQuery's documentation](https://api.jquery.com/) has a good "tutorial style" to it, which makes it a great reference for development.

## jQuery Basics
jQuery statements begin with `$` for example:
`$("div").css("color", "red")`
The first part of this statement selects elements just like `querySelectorAll()` in JavaScript. These selectors retraive elements in an Array, which could instead be saved to a standard JavaScript variable. Next, the selected elements are operated on by the `css()` function. This function is one of many defined by jQuery, which iterates through the list of elements to add `color: red;` to their CSS. There are many functions defined by jQuery for all sorts of uses. Many functions such as `text()` and `html()` follow a getter-setter methodology to either modify an element or retrieve data about it.
## [jQuery Common Functions](CommonFunctions.md)
jQuery has many functions that developers use. The [jQuery documentation](https://api.jquery.com/) is a great place to find methods as needed, but here is a list of common functions for getting started with jQuery.