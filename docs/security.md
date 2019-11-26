---
id: security
title: Security
sidebar_label: Security
---

* For security reasons try to avoid using FTP, rather use SFTP or connect through SSH and pull from the Git repo (with a deploy key)
* When using SSH, if possible, use an SSH-key and not just a password. This is to improve security
* For deployment using Git, or when setting up Git on a remote server, always use deploy keys, and do not reuse these keys
* When you add any login credentials or keys in a Git repo, even if it's a private repo with limited access, encrypt the files containing the credentials/keys if possible for maximum security, try to avoid having any sensitive information in version control
* Make use of (gitignored) `.env` files to keep environment variables secret, and easy to setup between environments
* When writing SQL statements, use prepared statements, or use a query builder like [KnexJS](https://knexjs.org)
* When writing SQL statements always make use of prepared statements
* Our complete security policy can be found on [security.bytecode.nl](https://security.bytecode.nl)
