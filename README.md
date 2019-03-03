# Proje-1---CodeceptJS-ile-U-tan-Uca-Web-Testi
In this Project  shows how to use the CodeceptJS Docker image as described in the docs so that it is not necessary to install it as a dependency in your application.

Prerequisites

Docker, for whichever machine you are developing on.

You could also install Node.js, & npm for local development and debugging, but these can also be fully run within Docker.

The CodeceptJS image comes with the Nightmare, Protractor, Puppeteer, and WebDriverIO drivers and can execute CodeceptJS with Puppeteer or Nightmare locally with no extra configuration.

Here there are two Docker Compose files, one to run the app for development (docker-compose.yml), that will allow you to view the Express app at http://localhost:3000 in your browser, and one to run the CodeceptJS tests (docker-compose.test.yml).

Unlike when running CodeceptJS as an application dependency, where docker exec -it <commands> would be use to enter the application container and run the tests, when the CodeceptJS container is ran it will immediately execute tests based on the configuration file specified. If none is specified then it will look for codecept.json or codecept.conf.js and error and exit if neither is found.

The CodeceptJS container is set to depend on the Express application container, with a healthcheck specified so that tests do not begin before the container is ready.

To run the app for development use:

"docker-compose up --build"

"docker exec -it app npm run test:e2e"

the app will continue to run afterwards unless "docker-compose down" is explicitly used.

Dependencies

Firstly, I create create package.json with Express as a dependency and CodeceptJS and WebDriverIO as dev dependencies.

codeceptjs run --steps --verbose --config=./e2eTests/docker.conf.js

--steps is great for showing output in the terminal as tests are running, while --verbose extends the level of detail even further.

--verbose is likely not needed as standard, but is good for seeing how the example works. --config shows us the path to the backend configuration file, in this case kept in a separate e2eTests directory.

My app

Next I need an app to test. For this I will run the Express “hello world” app from app.js.

Setting up Docker

Docker Compose is a tool for “defining and running multi-container Docker applications.” It starts Docker containers with the command docker-compose up, and stops them with docker-compose down. If a user defined Dockerfile is being used, --build is used to build it, either the first time docker-compose up is run, or if changes have been made to the Dockerfile. docker-compose.yml is the file that defines what the up command will do.

My Dockerfile uses the public node:carbon image as a base, sets the working directory, copies some files from our local machine to the container, runs npm install so that the container has all needed dependencies, and then runs the npm start command we specified.
This means that when docker-compose up --build is run, it will follow these steps, resulting in our app being ready and running on port 3000.
