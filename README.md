# Learning Microservices with Docker

## Overview

This is a beginner-level microservices project to learn how multiple Node.js services can communicate and run using Docker.

It includes three services:

- **User Service** – Create and fetch users (MongoDB as storage).
- **Task Service** – Create and fetch tasks, sends task messages to RabbitMQ.
- **Notification Service** – Listens to task messages from RabbitMQ and logs notifications.

## The project helped me understand:

- Basic microservices architecture
- Running services using Docker & Docker Compose
- MongoDB integration
- Asynchronous communication using RabbitMQ

## Features

### User Service
- Create user
- Get all users

### Task Service
- Create task (sends a message to RabbitMQ)
- Get all tasks

### Notification Service
- Receives task messages from RabbitMQ
- Logs notifications

## Learnings

- Basics of Docker & Docker Compose
- Running multiple services and managing dependencies
- MongoDB integration in Node.js microservices
- Asynchronous messaging with RabbitMQ
- Structuring a small microservice setup

## API Endpoints

- `POST http://localhost:3000/microservice/user/createuser`
- `GET  http://localhost:3000/microservice/user/getallusers`
- `POST http://localhost:3001/microservice/task/createtask`
- `GET  http://localhost:3001/microservice/task/getalltasks`
