# Sass

## About
Sass is a CSS preprocessor, which means you write sass code that gets transformed into browser-readable css. The most common variant of Sass is SCSS, which is a subset of CSS (all valid  CSS code is valid SCSS code), and this is the version this documentation is reffering to. To compile to CSS, developers use dart sass, which can be installed with npm. Sass's purpose is to add logic to CSS, similar to JavaScript, where styles can benefit from the DRY principle. Sass is one of the many answers to, how do we make writing CSS less painful?

Sass has support for variables which is one of the reasons it became popular before CSS implemented them. Another feature that has now come to vanilla CSS that Sass started is CSS nesting, where a child selector (eg. `li`) can be placed within the brackets of a parent selector (eg. `ul`) to create a `ul li` CSS rule. 


## What it can do
Sass's best features today are it's loops, if/else logic, inheritance, and OOP llke organization. It is used to create Bootstrap and can be used by developers to customize bootstrap, which is one of it's great uses today. 

## Syntax
> Basically everything in SCSS uses brackets like JavaScript to define blocks including, mixins, conditionals, and loops

### `$variable`
Sass variables are defined using `$variable` syntax and referenced using the same `$variable` syntax
### `@mixin`
Sass let's you define "mixins", which are like functions for your css code. mixins can be added to a CSS rule to add the rules defined in the mixin to that rule. Mixins take arguments like functions. The syntax is `@mixin mixin-name($color: default) {}`

### `@if` / `@else if` / `@else`
Sass lets you add logic to your program using conditionals: if, else if, and else statements.


