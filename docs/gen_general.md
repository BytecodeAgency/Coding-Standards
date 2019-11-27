---
id: gen_general
title: General
sidebar_label: General
---

## About

The coding standards for developers at Bytecode Digital Agency B.V. to ensure code health and quality of the products delivered to our clients.

All of our conventions regarding indentation and such can also be found in the form of an `.editorconfig` file.

Please read this file thoroughly, and also check out the links in the [Final words](#final-words) section. Spending half an hour now can save you many hours during projects!

*For installing all Javascript/Typescript linting dependencies, you can use a shell script, just run `curl https://raw.githubusercontent.com/BytecodeAgency/Coding-Standards/master/bin/bootstrap | bash` while within the repo you want to bootstrap*

## General

* **Write clean code at all times!**
* Functional programming over object oriented programming, over procedural programming (in most cases)
* Structure your work in a way that other developers can easily understand it. This means having the possibility of co-workers modifying your code in the back of your mind
* [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself): Don't repeat yourself! Don't build long functions that do a specific thing, but try to create smaller and more general functions
* Write [SOLID](https://en.wikipedia.org/wiki/SOLID) code
* Extensive documentation does not make up for bad code, code should be as self-documenting as possible, documentation should cover the last missing pieces of the puzzle
* All communication on GitLab and all documentation (and everything else in Git repos) should be in English, even if all team members are Dutch-speaking
* Use separate development, staging and production environments, don't develop on live (or directly on any server for that matter!)

## General Style

* Follow the rules of the linters used for the project
* Don't use "Yoda" conditions, as these make it harder to read your code at a glance

```ts
// Bad
if ("someStringToTestAgains" === someValue)

// Good
if (someValue === "someStringToTestAgains")
```

* Use double quotes for strings (even if the language allows single quote strings). This is mostly taken care of by our linters

```ts
// Bad
const text = 'string';

// Good
const text = "string";
```


* Indent using *4 _spaces_*. This implies that tab characters should not be used for indentation (unless working in Makefiles or Golang). Set your code editor to convert tabs to 4 spaces.
* Opening curly braces should be placed on the same line as the method declaration, like `function test() {`, not on a separate line

```ts
// Bad
function test() 
{
    doSomething();
}

// Good
function test() {
    doSomething();
}
```

* Try to keep your lines at max 80 character width, with a hard limit of 100 characters (indentation included). This is also taken care of by our linters
* Avoid trailing whitespaces
* For single line comments, use `// comment`, for multi-line comments, use `/** * comment */`

**Bad**

```ts
// Some
// multi line 
// commment

/* Single line commment */
```

**Good**

```ts
/**
 * Some 
 * multi line 
 * commment
 */

// Single line commment
```

* Make sure your code is readable. This means using clear names for your functions and adding enough and a consistent amount of whitespace. The latter is mostly taken care of by our linters
* Leave an empty last line in every file (a `\n` character)
