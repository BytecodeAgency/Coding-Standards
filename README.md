# Bytecode Digital Agency B.V. Coding Standards

[![Developed by](https://img.shields.io/badge/Developed%20by-Bytecode.nl-green.svg)](https://bytecode.nl)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

[![FOSSA Status](https://app.fossa.io/api/projects/custom%2B4543%2Fgit%40git.bytedev.io%3Abytecode%2Fcoding-standards.git.svg?type=shield)](https://app.fossa.io/projects/custom%2B4543%2Fgit%40git.bytedev.io%3Abytecode%2Fcoding-standards.git?ref=badge_shield)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/59b7a5078ae345fd9c5fb4f4e27d59aa)](https://www.codacy.com/app/lucianonooijen/coding-standards_2?utm_source=git.bytedev.io&amp;utm_medium=referral&amp;utm_content=bytecode/coding-standards&amp;utm_campaign=Badge_Grade)

## About

The coding standards for developers at Bytecode Digital Agency B.V. to ensure code health and quality of the products delivered to our clients.

All of our conventions regarding indentation and such can also be found in the form of an `.editorconfig` file.

Please read this file thoroughly, and also check out the links in the [Final words](#final-words) section. Spending half an hour now can save you many hours during projects!

# Table of Contents

We will discuss the following points in this Coding Standards file:

* [General](#general)
* [General Style](#general_style)
* [Testing](#testing)
* [Security](#security)
* [Javascript](#javascript)
* [Typescript](#typescript)
* [PHP](#php)
* [WordPress](#wordpress)
* [Python](#python)
* [Elixir](#elixir)
* [HTML](#html)
* [CSS](#css)
* [CSS-preprocessors](#css-preprocessors)
* [Git](#git)
* [Docker](#docker)

# General

* **Write clean code at all times!**
* Functional programming over object oriented programming, over procedural programming (in most cases)
* Structure your work in a way that other developers can easily understand it. This means having the possibility of co-workers modifying your code in the back of your mind
* [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself): Don't repeat yourself! Don't build long functions that do a specific thing, but try to create smaller and more general functions
* Write [SOLID](https://en.wikipedia.org/wiki/SOLID) code
* Extensive documentation does not make up for bad code, code should be self-documenting
* When starting on a project, try to pick the best tool for the job. Be sure to discuss this with your team, as this can have a lot of impact on a project
* Save data in a database, not in a file on the server, as some services run in Kubernetes
* Use a clean folder structure. There is no default folder structure, because this depends on the kind of product. Just to be sure your colleagues can work with your code, discuss your proposal for the project folder structure with your team members
* All communication on GitLab and all documentation (and everything else in Git repos) should be in English, even if all team members are Dutch-speaking
* Use separate development, staging and production environments, don't develop on live!

# General Style

* Follow the rules of the linters used for the project
* Don't use "Yoda" conditions, as these make it harder to read your code at a glance
* Use camelCase and use single quotes (unless the language does not allow this). This is mostly taken care of by our linters
* Indent using *4 _spaces_*. This implies that tab characters should not be used for indentation. Set your code editor to convert tabs to 4 spaces.
* Opening curly braces should be placed on the same line as the method declaration, like `function test() {`, not on a separate line
* Try to keep your lines at max 80 character width, with a hard limit of 100 characters (indentation included). This is also taken care of by our linters
* Avoid trailing whitespaces
* For single line comments, use `// comment`, for multi-line comments, use `/** * comment */`
* Make sure your code is readable. This means using clear names for your functions and adding enough and a consistent amount of whitespace. The latter is mostly taken care of by our linters
* Leave an empty last line in every file (a `\n` character)

# Testing

* Where possible, tests should be present, this includes unit, integration and end-to-end tests
* Test-driven development (TDD) is highly encouraged!
* At Bytecode, we aim to always achieve at least 80% of test coverage, preferably 90%+
* For all projects (even for HTML websites and WordPress themes), a CI-pipeline should be set up, to ensure the code compiles, there are no missing dependencies and there are no linting errors
* Always test your own code before sending your code to QA or requesting a merge-request review

# Security

* For security reasons try to avoid using FTP, rather use SFTP or connect through SSH and pull from the Git repo (with a deploy key)
* When using SSH, if possible, use an SSH-key and not just a password. This is to improve security
* For deployment using Git, or when setting up Git on a remote server, always use deploy keys, and do not reuse these keys
* When you add any login credentials or keys in a Git repo, even if it's a private repo with limited access, encrypt the files containing the credentials/keys if possible for maximum security, try to avoid having any sensitive information in version control
* Make use of (gitignored) `.env` files to keep environment variables secret, and easy to setup between environments
* Our complete security policy can be found on [security.bytecode.nl](https://security.bytecode.nl)

# Javascript

*Our guidelines are mostly based on the Airbnb ESLint config, with a few a couple of modifications*

* The usage of Typescript is encouraged to ensure type safety
* For Javascript testing, [Jest](https://jestjs.io/) is the prefered testing tool
* Write Javascript using the latest standards, then transpile to ES5 for production code
* Only use `let` and `const`, not `var`, and try to not use classes
* For websites not built on a Javascript-framework, try to work just with vanilla Javascript, and try to avoid jQuery
* Use Yarn as a package manager: [it's better than NPM](https://www.sitepoint.com/yarn-vs-npm/)
* Put semi-colons on the end of your lines, like you would in C-style languages
* Use arrow functions (`const foo = () => bar()`) where possible
* When writing an arrow function with one argument, don't use brackets (`const foo = arg => bar(arg)`)
* Comment your code following the [ESDoc](https://esdoc.org/) notation, it's understood by (almost) every code editor and IDE

# Typescript

* Unless working with untyped legacy Javascript-code, don't use implicit any
* Use PascalCase for classes, types, namespaces, enums and enum members
* Don’t use the types Number, String, Boolean, or Object, as these types refer to non-primitive boxed object<Plug>CocRefresh
* Annotate arrays as `members: Member[]`, rather than `members: Array<Member>`
* For objects, use `foo: {}` over `foo: object`
* For React in Typescript (TSX), type your functional components using `React.FC`
* For React component files, use `PascalCaseComponent.tsx` for filenames, otherwise don't use capital letters in filenames
* Use "T" for the type variable if only one is needed.
* Do not prefix your interfaces with "I", so use `interface Member{}` over  `Interface IMember {}`
* Prefer interface over type, use type when you need a union or intersection

# PHP

* For server side programming we prefer using NodeJS/Python over PHP, so only use PHP when necessary
* Use a clean folder structure and use include to add other files. Make sure files don't get longer than 200 lines
* For reasonably sized projects, use the MVC structure
* If you are storing user data, especially passwords, you **must** use a framework like Laravel, because you really *really* shouldn't mess with storing that stuff yourself
* PHP is notorious for ugly code, so be aware of this and write your code *extra* clean
* Always use PHP 7.0+

# WordPress

This is an extension of the PHP part of this file

* Write your WordPress code along the rules of the [WordPress Codex](https://codex.wordpress.org/)
* Write variables using underscores (snake_case), not camel-case, because WordPress does not allow camel-case, so write variables like `this_is_an_example`
* Don't change anything in the core files or existing plugins/themes! Use hooks, make a plugin out of it, or add it to the child theme
* Don't hardcode paths, use functions like `get_stylesheet_directory_uri`
* Never write MySQL queries yourself, use `$wpdb`
* Enqueue your stylesheets by hand, not just in the style.css file
* For your custom styles and scripts, use Webpack or Gulp
* If possible, use the tools from [Roots.io](https://roots.io/)

# Python

* For Python code, the [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/) should be followed
* For Docstring Conventions, check [PEP 257 Docstring Conventions](https://www.python.org/dev/peps/pep-0257/)
* Always write your code in Python 3, if possible
* For creating virual environments for Python, the usage of 'pipenv' is preferred over 'virtualenv'
* To ensure your code will not just run on your computer, make use of 'pipenv', to standardize, [Tox](https://tox.readthedocs.io/en/latest/) is a great tool, or you can use Docker of course, in addition to a CI testing script
* Make sure there is always a `requirements.txt` file available, so dependencies are the same on different environments
* Where possible, use type checking

# Elixir

*These guidelines are based on [The Elixir Style Guide](https://github.com/christopheradams/elixir_style_guide) and [Elixir Style Guide](https://github.com/lexmag/elixir-style-guide)*

* Make use of the Elixir v1.6 code formatter, that will take care of most of the syntactical stuff
* Instead of the usual 4 space indentation, use 2 space indentation
* Use snake_case for filenames for CamelCase module names
* Use snake_case for atoms, functions and variables
* Use parentheses when a `def` has arguments, and omit them when it doesn't
* Don't put a blank line after `defmodule`
* List module attributes and directives in the following order:
    1. @moduledoc
    2. @behaviour
    3. use
    4. import
    5. alias
    6. require
    7. defstruct
    8. @type
    9. @module_attribute
    10. @callback
    11. @macrocallback
    12. @optional_callbacks
* Make exception names end with a trailing `Error`
* Always include `@type` and `@spec` declarations
* Always use Dialyzer/Dialyxir to analyze your code
* Use Logger, rather than `IO.puts` in production code
* Parentheses are a must for local or imported zero-arity function calls
* Add underscores to decimal literals that have six or more digits (`1_000_000`)
* Don't try to setup concurrency all by yourself, rather use OTP for that (that's the reason you're using Elixir in the first place, right?)
* Even though Elixir allows it, never, ever, reassign variables!
* Represent each level of nesting within a module name as a directory, example:

```elixir
# file is called parser/core/xml_parser.ex

defmodule Parser.Core.XMLParser do
end
```

# HTML

* Don't use inline styling or inline Javascript, don't import styling using `@import`, use `<link>`
* For production, uglify/minify your code, remove source maps and combine all files into one CSS file and one Javascript file
* Use double quotes like `<a href="#">`, not single quotes like `<a href='#'>`
* Write your code with XHTML in mind, so use `<br/>` and not just `<br>`, because there is always a chance your code will later be converted into a React app. *Side Note: using `<br>` in your HTML is not very semantic, use CSS for white space please* :angel:
* Make us of the HTML5 elements `<article>, <nav>, <aside>, <details>, <header>, <footer>, <section>`, instead of `<div>` where appropriate.
* _Only_ leave an empty line between parts of the page, like the navigation, or `<section>` tags
* For templating, try to use a templating language like Handlebars.
* Make sure all responsive, accessibility and SEO tags are present!

# CSS

* Try not to use CSS, rather use SASS/SCSS, and try to avoid CSS frameworks
* If you are using another framework that uses px-units, use px, else use rem-values *(rem values scale with the HTML-object's font-size, which makes responsive typography a whole lot easier)*
* If the project allows it, write your media queries mobile first, like `@media (min-width: 30rem)`
* If a :hover pseudo class is styled, style :focus the same for accessibility
* Try to never use IDs as selector, use classes, avoid `!important`
* Use [BEM](http://getbem.com/naming/) for naming CSS classes
* Name classes descriptively
* Use double quotes, not single quotes
* Use only one declaration per line, this makes the code more readable
* Add a space after the colon of a declaration, so not `margin:1rem;` but `margin: 1rem;`
* For font-sizes, use an exponential scale, preferably based on the Fibonacci number (1.618) [Click here to geek out](https://3.7designs.co/blog/2010/10/how-to-design-using-the-fibonacci-sequence/). There is also a Sass plugin available for modular scales like this. You can find the plugin [here](https://github.com/modularscale/modularscale-sass)
* For colors, use hex values (not rgb or rgba), as short as possible, and in lowercase, for example: not `#FFFFFF` but `#fff`, and not `background-color: #fff` but `background: #fff`
* A zero (0) should not have unit
* Always prefer Flexbox and Grid over floats
* If you are writing emails, use of the MJML preprocessor is encouraged
* When working with ReactJS, the use of [Styled Components](https://www.styled-components.com/) is encouraged over plain CSS/SCSS

# CSS preprocessors

* Currently, SCSS is preferred for a project (if the project is not written in React). If you want to use something else, discuss this with your team
* Do not use extends, but use mixins
* Don't go and add prefixes by hand or by using mixins. Instead, let a compiler/plugin handle this for you
* Try to avoid nesting, rather use BEM. Use of nesting is mostly resticted to :hover-states etc.
* When you do nest, make it at most 3 levels deep
* Provide the media queries rules inside the element
* Break files out into small modules
* For shameful code, use the *_shame.scss file*. We all have to do this sometimes, better own up to it. [More Geeky links](https://csswizardry.com/2013/04/shame-css/)

# Git

* GitLab should be used as main Git server, if needed GitHub can be setup as repository mirror, unless the project will be created as a free open source software project, then GitHub (@BytecodeOpenSource) must be used as the main Git server.
* All code merged to the `develop` and `master` branches must have gone through a code review
* Don't commit compiled files
* Work on a branch based on the issue you are working on, when using GitLab, use the issue number
* Make sure you always add steps in the README.md file for others to make your code run: include the needed global dependencies, commands to install dependencies, and steps to run everything, both in development and production.
* Write a clear description for your commit which makes clear what was changed or added, fo example: not `"styling updates"`, but rather `"improved styling for the menu dropdown"`
* Commit often, and don't commit for multiple issues at once, make separate commits
* Before opening a mergeable merge-request, all acceptance criteria should be met
* Use [semantic versioning](https://semver.org/) for production releases

# Docker

* To ensure compatibility between local, development, staging, test and production environments, the use of Docker is encouraged
* Docker Compose should be used when there are multiple services running, like NodeJS and PostgreSQL
* Always prefer 2 smaller containers over 1 larger one
* Usage of Linux Alpine is prefered, because it is a very light distro and will speed things up a lot
* Try not to create complete Dockerfile install scripts, rather use existing (and verified safe!) Docker images from the Docker Hub
* The `docker-compose.yml` file should be the same between environments, so no `-prod.yml`, `-dev.yml` files
* GitLab can be used as container registry

# Final words

Some final words of this Coding Guidelines file:

#### Recommended books about clean code

* "Clean Code" by Robert C. Martin (Uncle Bob)
* "The Clean Coder" by Robert C. Martin (Uncle Bob)

#### Sources

The following sources are used for the creation of this Coding Guidelines file, please also read the following sources (you don't have to go in depth), because of course we couldn't add every single usable detail in this file.

* [Airbnb Javascript standards](https://github.com/airbnb/javascript)
* [Javascript project guidelines](https://github.com/wearehive/project-guidelines)
* [Sitepoint SASS project architecture](https://www.sitepoint.com/architecture-sass-project/)
* [SASS Guidelin.es](https://sass-guidelin.es/), please read [this](https://sass-guidelin.es/#too-long-didnt-read) part for some great tips
* [Altavia ACT styleguide](https://github.com/Altavia-ACT/styleguide)
* [Gitignore creator](https://www.gitignore.io/)
* [WordPress Codex](https://codex.wordpress.org/)
* [Roots.io](https://roots.io/)
* [Wikipedia - DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Fibonacci](https://3.7designs.co/blog/2010/10/how-to-design-using-the-fibonacci-sequence/)
* [Yarn](https://www.sitepoint.com/yarn-vs-npm/)
* [BEM](http://getbem.com/naming/)

#### Starter packs

* Try to not use starter packs at all
* This repo for Parcel/Handlebars development
* [Mega Boiler Plate](http://megaboilerplate.com/)

#### Contributors

* [Luciano Nooijen - Bytecode Digital Agency B.V.](https://bytecode.nl)
* [Jeroen van Steijn - Bytecode Digital Agency B.V.](https://bytecode.nl)
