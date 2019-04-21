# Use an official Python runtime as a parent image
FROM node:10.15.3-stretch

# Set the working directory to /app
WORKDIR /app

RUN npm install

# Copy the current directory contents into the container at /app
COPY . /app

EXPOSE 4200

CMD node server.js