---
id: git
title: Git
sidebar_label: Git
---

* GitLab should be used as main Git server, if needed GitHub can be setup as repository mirror, unless the project will be created as a free open source software project, then GitHub (@BytecodeOpenSource) must be used as the main Git server.
* All code merged to the `develop` and `master` branches must have gone through a code review
* Don't commit compiled files
* Work on a branch based on the issue you are working on, when using GitLab, use the issue number
* Make sure you always add steps in the README.md file for others to make your code run: include the needed global dependencies, commands to install dependencies, and steps to run everything, both in development and production.
* Write a clear description for your commit which makes clear what was changed or added, fo example: not `"styling updates"`, but rather `"improved styling for the menu dropdown"`
* Commit often, and don't commit for multiple issues at once, make separate commits
* Before opening a mergeable merge-request, all acceptance criteria should be met
* Use [semantic versioning](https://semver.org/) for production releases
