# Docker Deploy Steps

- Open a terminal in the root directory
- Login to AWS to be able to push images
  - `aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 540736005575.dkr.ecr.us-east-1.amazonaws.com`
- Build the image specifying the Dockerfile and Tag
  - `docker build . -f Api.Dockerfile -t 540736005575.dkr.ecr.us-east-1.amazonaws.com/utcn-course:latest`
- Push the image to the AWS Docker Repository
  - `docker push 540736005575.dkr.ecr.us-east-1.amazonaws.com/utcn-course:latest`
