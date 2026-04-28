# 🚀 Node.js DevOps CI/CD Project (Docker + Kubernetes + GitHub Actions)

## 📌 Project Overview

This project demonstrates a complete DevOps workflow for a Node.js REST API using modern tools including Docker, Kubernetes (Minikube), and GitHub Actions CI/CD pipeline.

The goal is to simulate a real-world production deployment pipeline from code to containerization to orchestration and automation.

---

## 🧱 Architecture

```
Developer Code
      ↓
GitHub Repository
      ↓
GitHub Actions (CI/CD)
      ↓
Docker Image Build
      ↓
DockerHub Registry
      ↓
Kubernetes (Minikube)
      ↓
Node.js API Service
      ↓
Browser / API Clients
```

---

## ⚙️ Tech Stack

* Node.js (Express.js)
* Docker
* Kubernetes (Minikube)
* GitHub Actions (CI/CD)
* DockerHub
* Linux (WSL2)

---

## 🚀 Features

* REST API built with Express.js
* Health check endpoint (`/health`)
* Containerized using Docker
* Deployed on Kubernetes cluster
* Multi-replica deployment (scaling)
* CI/CD pipeline using GitHub Actions
* Automated Docker image build & push

---

## 📂 Project Structure

```
node-devops-app/
│── src/
│   └── app.js
│── server.js
│── routes/
│── tests/
│── Dockerfile
│── deployment.yaml
│── service.yaml
│── package.json
│── .github/workflows/
│   └── ci-cd.yml
```

---

## 🐳 Docker Setup

### Build Image

```
docker build -t node-devops-app .
```

### Run Container

```
docker run -p 3000:3000 node-devops-app
```

---

## ☸️ Kubernetes Deployment (Minikube)

### Apply Deployment

```
kubectl apply -f deployment.yaml
```

### Apply Service

```
kubectl apply -f service.yaml
```

### Check Pods

```
kubectl get pods
```

### Expose Service

```
minikube service node-api-service
```

---

## 🔁 CI/CD Pipeline (GitHub Actions)

Pipeline automatically:

1. Checks out code
2. Builds Docker image
3. Logs into DockerHub
4. Pushes image to registry

Trigger:

```
on: push to main branch
```

---

## 🌐 API Endpoints

### Health Check

```
GET /health
```

Response:

```json
{
  "status": "UP",
  "time": "2026-04-28T..."
}
```

---

## 📊 Key DevOps Concepts Demonstrated

* Containerization
* Microservices deployment
* Kubernetes orchestration
* CI/CD automation
* Immutable infrastructure
* Rolling updates

---

## 🧪 How to Run Locally

### 1. Install dependencies

```
npm install
```

### 2. Run app

```
node server.js
```

### 3. Test API

```
curl http://localhost:3000/health
```

---

## ☁️ Future Improvements

* AWS ECS / EKS deployment
* Terraform Infrastructure as Code
* Prometheus + Grafana monitoring
* Helm charts
* Ingress controller setup

---

## 👨‍💻 Author

DevOps Engineer Portfolio Project

Focus: CI/CD, Kubernetes, Cloud Infrastructure

---

## 📌 Status

✔ CI/CD Working
✔ Dockerized
✔ Kubernetes Deployed
✔ API Functional

---

🔥 This project represents a real-world DevOps pipeline from code to production-ready deployment environment.
