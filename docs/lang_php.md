---
id: lang_php
title: PHP and WordPress
sidebar_label: PHP and WordPress
---

## PHP

* For server side programming we prefer using NodeJS/Python over PHP, so only use PHP when necessary
* Use a clean folder structure and use include to add other files. Make sure files don't get longer than 200 lines
* For reasonably sized projects, use the MVC structure
* If you are storing user data, especially passwords, you **must** use a framework like Laravel, because you really *really* shouldn't mess with storing that stuff yourself
* PHP is notorious for ugly code, so be aware of this and write your code *extra* clean
* Always use PHP 7.0+

## WordPress

This is an extension of the PHP part of this file

* Write your WordPress code along the rules of the [WordPress Codex](https://codex.wordpress.org/)
* Write variables using underscores (snake_case), not camel-case, because WordPress does not allow camel-case, so write variables like `this_is_an_example`
* Don't change anything in the core files or existing plugins/themes! Use hooks, make a plugin out of it, or add it to the child theme
* Don't hardcode paths, use functions like `get_stylesheet_directory_uri`
* Never write MySQL queries yourself, use `$wpdb`
* Enqueue your stylesheets by hand, not just in the style.css file
* For your custom styles and scripts, use Webpack or Gulp
* If possible, use the tools from [Roots.io](https://roots.io/)
