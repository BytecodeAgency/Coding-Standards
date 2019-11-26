---
id: arch_design
title: Architectual design
---

A low-level overview of the technical implementation, aimed at people with a software development background.

## Philosophy

We want the applications we deliver to our clients to be of the highest value. We believe this can only be achieved by structuring the application in a way that is scalable, performant and safe. Technical debt should be avoided where possible, and further development should be possible without the requirement of a complete rewrite.

For this reason we have created an architecture that satisfies all of these criteria. Our software architecture model is based on several existing approaches. These approaches include, but are not limited to: Domain Driven Development, The Clean Architecture, n-tier Architecture and Layered Architecture. To see a complete list of approaches, see the Architecture -> Sources page.

The core of our philosophy is that concerns should be separated and the core of the application should not be dependent on anything else. This means the core of the application is agnostic to the data source or the implementation of the business logic. In other words, business logic should know nothing of which kind of database is used, or whether it will be a web-application, an API or a command-line tool. We regard this as the best way to create a futureproof and robust application.

## Git workflow

Our workflow with Git is based on Git-flow. We use the following branches:

| Branch | Goal |
| :----- | :--- |
| develop | Our main branch, where code is merged into |
| master | The branch deployed to the production environment, commits here will be tagged |
| release-* | Branches deployed to the staging environment before being merged into master |
| hotfix-* | Crucial fixes directly merged into master (and then into develop later) |
| feature-* | Feature branches for development, should include the GitLab issue number if possible |

A chart of the source code architecture can be found in Appendix A.

## Cloud infrastructure

We use different environments for test, staging and production, so we can asure that the application running in production is well tested.

Our cloud infrastructure is hosted on DigitalOcean, with all servers running in data centers located in Amsterdam. Depending on the environment, expected traffic and type of application, we will choose a fitting solution for hosting. Most of our applications run on either single droplets (servers), on multiple servers behind a load balancer, or in a Kubernetes-cluster.

We manage our infrastructure with Terraform, following the "intrastructure-as-code"-principle. Servers are provisioned with Ansible, and deployments will either be done with Docker, GitLab CI or Ansible.

A chart of the cloud infrastructure can be found in Appendix B.

## Data(base) structure

In our philosophy, the data structures in the application core and structure of the database should differ, as this would otherwise violate our "the core should not know about IO[^io]"-principle.

[^io]: Input/output, the data sources and destinations.

The exact structure of the data within the application and the database will be composed at a later time and documented.

## Documentation

Although we believe code should be self-documenting, inline documentation of the application is sometimes a necessary evil. We write documentation in a way that is conventional to the language so an inline-documatation site can be generated, if available for the chosen stack.

Besides inline documentation we feel the need to document a higher-level overview of the application, to document how certain parts of the application should be used/implemented, including API documentation. This will be written in a documentation generator program like [Docusaurus](https://docusaurus.io/) or [Gitbook](https://www.gitbook.com/). The deployment of this documentation is also part of the CD setup.

For communication to third parties (for example with APIs), we also write [Swagger](https://swagger.io/) documentation.
