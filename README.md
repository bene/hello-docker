# hello-docker
Hello world image for Docker. The only thing this image does is serving a static HTML file. Use this to test your environment setup or for whatever you want! It was created to test our load balancing setup.

```docker run -d --restart=always --name=hello-world -p 80:3000 alpinesoft/hello-docker:latest```

### Use cases
* Test load balancing setup
* Test reverse proxy setup
* Playground

**NOTE**: The HTTP server listens on port 3000, so you have to expose this port.