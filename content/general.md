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
