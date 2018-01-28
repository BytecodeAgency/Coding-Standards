# Nooijen Web Solutions Coding Standards

The coding standards for developers at Nooijen Web Solutions to ensure code health and quality of the products delivered to our clients.

## To do

* Add all stuff from the current PDF file
* Add stuff from Asana to here as addition of the PDF
* Go more in depth to get some more info about certain js/css stuff
* Add default folder structure of a project
* Add the following files:
  * .eslintrc
  * .babelrc
  * .travis.yml
  * Gulpfile.js
* Add links to starter packs for MEAN, Node and HTML/Handlebars

## About

Please use these standards in every line of code you write. This is not to bully you but to make sure everyone in our company writes code the same way, and this is the only way to assure quality of our code.

This repo also contains files you can use for development. These files are *defaults*, so you can of course edit them to suit the needs of the project.

# Table of Contents

Points that will be discussed in this Coding Standards file

* General
* Git
* HTML
* CSS
* Preprocessors for CSS
* Javascript
* PHP
* WordPress

# General

There are some general rules that should be followed at all times.

* Work in a structured way! This is important to improve code quality and make it easier for your colleagues to work on the same project
* DRY! Don't repeat yourself! Don't build long functions for everything, but try to use smaller more modular (functional programming like) functions
* Use a clear folder structure, more on this in the *Git* section of this file
* Don't use "Yoda" conditions
* Always indent using 4 spaces, in all files. If you are using tabs, set your code editor to convert tabs to 4 spaces
* Lines should never exceed 150 characters (spaces included)
* For single line comments, use `// comment`, for multi-line comments, use `/** * comment */` styled comments in a Javadoc styled way
* Always document your code.
* If you are writing a part of a project that is critical to work because other systems rely on it, you must write unit tests to make sure the other parts of the systems will still work
* Make sure your code is readable. This means using clear names for your functions, adding enough (although not too many) comments and adding enough and a consistent amount of whitespace
* Always use linters when you are writing code, and let the linter check your code before committing on Git
* When starting on a project, always pick the best tool for the job, we are not thinking inside of the box, but always discuss this with your superior
* Before working on a project, always discuss with the other developers on the approach and points you and your team should focus on during the project

# Git

* Don't merge your own code into the develop/master branch, always create a pull request and let someone check the code
* Always work on your own branch, and name the branch to your first name, although if Jira is used for the project, you can name the branch to the issue name in Jira
* Make sure you always add steps in the README.md file for others to make your code run, so include the needed global dependencies, commands to install dependencies, and steps to run everything. Strive to write documentation so that everyone will understand it
* For making sure your project will run on the computer of others, please use tools like TravisCI or Jenkins
* If your project uses a set of dependencies (like Mongo and Node) working together in a complex way, write a Dockerfile or Docker Compose file
* Always write a clear description for your commit so it is clear what was changed or added, so not just `"styling updates"`, but rather `"improved styling for the menu dropdown"`
* If your commit is to fix a Jira issue, include the issue number in your commit message

# HTML

* Never use inline styling and always use external files to include styling and scripts
* Use `<link rel="stylesheet" href="style.css">` and not `@import` to add styling. For script use `<script src="codeguide.js" />`
* For custom written code, you can include just 1 script file and 1 stylesheet, so combine everything using Gulp or Webpack
* For images, always add an `alt` tag
* Write your code with XHTML in mind, so use `<br/>` and not just `<br>`, because there is always a chance your code will later be converted into a React app
* Use HTML5 elements, so use `<article>, <nav>, <aside>, <details>, <header>, <footer>, <section>`, and not just `<div>`
* For templating, you can always use Handlebars. If you like to use another templating engine like, like Pug or ejs, discuss this with your superior
* Use the following order of attributes on HTML-elements:
  * src, for, type, href, value
  * id, name
  * class
  * data-*
  * title, alt
  * role, aria-*
* Use the following "basic" structure for HTML documents
```html
<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="tekst">
    <meta name="keywords" content="tekst">
    <title>Document</title>
    [css dependencies]
    [font dependencies]
  </head>
  <body>
  Content goes here
  [javascript dependencies]
  </body>
</html>
```

# CSS

# Preprocessors for CSS

# Javascript

# PHP

# WordPress

# Final words

Some final words of this Coding Guidelines file:

#### Sources

The following sources are used for the creation of this Coding Guidelines file, please also read the following sources (you don't have to go in depth), because of course we couldn't add every single usable detail in this file.

* [Airbnb Javascript standards](https://github.com/airbnb/javascript)
* [Sitepoint SASS project architecture](https://www.sitepoint.com/architecture-sass-project/)
* [SASS Guidelin.es](https://sass-guidelin.es/#extend)
* [Gitignore creator](https://www.gitignore.io/)

#### Contributors

[Luciano Nooijen - Nooijen Web Solutions](https://nooijensolutions.nl)