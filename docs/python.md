---
id: python
title: Python
sidebar_label: Python
---

* For Python code, the [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/) should be followed
* For Docstring Conventions, check [PEP 257 Docstring Conventions](https://www.python.org/dev/peps/pep-0257/)
* Always write your code in Python 3, if possible
* For creating virual environments for Python, the usage of 'pipenv' is preferred over 'virtualenv'
* To ensure your code will not just run on your computer, make use of 'pipenv', to standardize, [Tox](https://tox.readthedocs.io/en/latest/) is a great tool, or you can use Docker of course, in addition to a CI testing script
* Make sure there is always a `requirements.txt` file available, so dependencies are the same on different environments
* Where possible, use type checking
