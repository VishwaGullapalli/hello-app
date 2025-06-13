# Hello App

A simple Node.js Express application that provides a customizable welcome message and health check functionality with automated CI/CD deployment.

## 📋 Description

This is a lightweight web application built with Express.js that serves a welcome page and provides health monitoring capabilities. The application is fully containerized with Docker and features automated deployment to Docker Hub and Render using GitHub Actions.

## ✨ Features

**Welcome Endpoint**: Displays a customizable welcome message  
**Health Check**: Provides application health status via REST API  
**Environment Configuration**: Customizable through environment variables  
**Docker Support**: Multi-stage Docker build with Alpine Linux for minimal footprint  
**Development Tools**: Includes nodemon for development convenience  
**CI/CD Pipeline**: Automated build and deployment using GitHub Actions  
**Docker Compose**: Simplified development setup with volume mounting

## 🌐 Live Demo

The application is deployed and available at: **https://hello-app-3u5e.onrender.com**

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (or Docker for containerized deployment)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/VishwaGullapalli/hello-app.git
cd hello-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the application**
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

4. **Access the application**
   - Main endpoint: http://localhost:3000
   - Health check: http://localhost:3000/health

### Docker Development with Compose

1. **Start development environment**
```bash
docker-compose up
```

2. **Access the application**
   - Main endpoint: http://localhost:3000
   - Health check: http://localhost:3000/health

The Docker Compose setup includes volume mounting for live code reloading during development.

### Docker Deployment

1. **Build the Docker image**
```bash
docker build . -t hello-app
```

2. **Run the container**
```bash
# Basic run
docker run -p 3000:3000 hello-app

# With custom name
docker run -p 3000:3000 -e NAME="Your Name" hello-app
```

3. **Access the application**
   - Main endpoint: http://localhost:3000
   - Health check: http://localhost:3000/health

## 🔧 Configuration

The application can be configured using environment variables:

|Variable|Description|Default|
|--|--|--|
|`PORT`|Server port|`3000`|
|`NAME`|Custom name for welcome message|Empty string|

## 📡 API Endpoints

### GET /

Returns a welcome message. The message can be customized using the `NAME` environment variable.

**Response:**
```html
<h1>Welcome to the application.</h1>
```

### GET /health

Returns the application health status.

**Response:**
```json
{
  "status": "OK",
  "message": "Application is running"
}
```

## 🛠️ Development

### Available Scripts

- `npm start` - Start the application in production mode
- `npm run dev` - Start the application in development mode with auto-reload
- `npm test` - Run tests (currently aliases to npm start)

### Project Structure

```
hello-app/
├── .github/
│   └── workflows/
│       └── deploy.yaml       # CI/CD pipeline configuration
├── Dockerfile                # Multi-stage Docker configuration
├── docker-compose.yaml       # Development environment setup
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Locked dependency versions
├── index.js                  # Main application file
└── README.md                 # This file
```

## 🚀 Deployment

### Automated Deployment

The application features automated CI/CD deployment using GitHub Actions:

- **Trigger**: Automatic deployment on every push to the `master` branch
- **Build**: Multi-stage Docker build with optimized production image
- **Registry**: Automatic push to Docker Hub
- **Deploy**: Automatic deployment to Render platform

### Manual Docker Hub Deployment

The application is available on Docker Hub:

```bash
docker pull pplx/hello-app
docker run -p 3000:3000 pplx/hello-app
```

## 🏗️ CI/CD Pipeline

The GitHub Actions workflow (`deploy.yaml`) includes:

1. **Build Stage**
   - Checkout repository
   - Set up Docker Buildx
   - Login to Docker Hub
   - Build and push Docker image

2. **Deploy Stage**
   - Deploy to Render using the built Docker image
   - Wait for deployment completion

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Unlicense - see the [LICENSE](LICENSE) file for details.