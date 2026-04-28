# 🚀 node-devops-app

A production-style **Node.js REST API** demonstrating a complete DevOps workflow using **Docker, Kubernetes (Minikube), and CI/CD with GitHub Actions**.

---

## 📌 Overview

`node-devops-app` is a simple yet scalable REST API built with Node.js and Express.  
It is designed to simulate a real-world DevOps project with full automation from development to deployment.

The project includes:
- REST API (Users CRUD)
- Containerization with Docker
- Kubernetes deployment (Minikube-ready)
- CI/CD pipeline using GitHub Actions
- Production-ready project structure

---

## 🧱 Tech Stack

- Node.js
- Express.js
- Docker
- Kubernetes (Minikube)
- GitHub Actions (CI/CD)
- Helm-ready structure (optional upgrade)

---

## 📁 Project Structure
node-devops-app/
│
├── src/
│ ├── routes/
│ ├── controllers/
│ ├── services/
│ ├── middlewares/
│ ├── config/
│ └── app.js
│
├── tests/
├── server.js
├── Dockerfile
├── deployment.yaml
├── service.yaml
├── package.json
└── .github/workflows/ci-cd.yml


---

## ⚙️ Features

### 🔹 Backend API
- Create user
- Get all users
- Delete user
- Health check endpoint

### 🔹 DevOps Features
- Dockerized application
- Kubernetes deployment (2 replicas by default)
- CI/CD pipeline automation
- Environment-based configuration
- Scalable architecture

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/node-devops-app.git
cd node-devops-app
2️⃣ Install dependencies
npm install
3️⃣ Run locally
npm start

App will run on:

http://localhost:3000
📡 API Endpoints
Health Check
GET /health

Response:

{
  "status": "UP",
  "time": "2026-04-28T00:00:00.000Z"
}
Get Users
GET /api/users
Create User
POST /api/users

Body:

{
  "name": "John Doe"
}
Delete User
DELETE /api/users/:id
🐳 Docker Setup
Build image
docker build -t node-devops-app .
Run container
docker run -p 3000:3000 node-devops-app
☸️ Kubernetes Deployment (Minikube)
Start Minikube
minikube start
Use Minikube Docker environment
eval $(minikube docker-env)
Build image inside Minikube
docker build -t node-devops-app .
Deploy application
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
Access service
minikube service node-api-service
🔁 CI/CD Pipeline (GitHub Actions)

On every push to main branch:

Pipeline steps:
Checkout code
Install dependencies
Build Docker image
(Optional) Push to Docker Hub
📄 Example Workflow
name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - run: npm install

      - name: Build Docker Image
        run: docker build -t node-devops-app .
📦 Kubernetes Files
Deployment
2 replicas
Node.js container
Port 3000 exposed
Service
NodePort service
External access via Minikube
🎯 Purpose of This Project

This project was built to demonstrate:

Backend development skills (Node.js)
Containerization (Docker)
Kubernetes orchestration
CI/CD automation
DevOps best practices


👨‍💻 Author
DevOps Engineer Abdellatif Mohamed

