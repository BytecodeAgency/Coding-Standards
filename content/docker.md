# Docker

* To ensure compatibility between local, development, staging, test and production environments, the use of Docker is encouraged
* Docker Compose should be used when there are multiple services running, like NodeJS and PostgreSQL
* Always prefer 2 smaller containers over 1 larger one
* Usage of Linux Alpine is prefered, because it is a very light distro and will speed things up a lot
* Try not to create complete Dockerfile install scripts, rather use existing (and verified safe!) Docker images from the Docker Hub
* The `docker-compose.yml` file should be the same between environments, so no `-prod.yml`, `-dev.yml` files
* GitLab can be used as container registry
