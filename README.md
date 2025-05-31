# Hello App

A simple Node.js Express application that provides a customizable welcome message and health check functionality.

## 📋 Description

This is a lightweight web application built with Express.js that serves a welcome page and provides health monitoring capabilities. The application is fully containerized with Docker and can be easily deployed to any environment.

## ✨ Features

- **Welcome Endpoint**: Displays a customizable welcome message
- **Health Check**: Provides application health status via REST API
- **Environment Configuration**: Customizable through environment variables
- **Docker Support**: Fully containerized with Alpine Linux for minimal footprint
- **Development Tools**: Includes nodemon for development convenience

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

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build . -t hello-app
   ```

2. **Run the container**
   ```bash
   # Basic run
   docker run -p 8080:8080 hello-app
   
   # With custom name
   docker run -p 8080:8080 -e NAME="Your Name" hello-app
   ```

3. **Access the application**
   - Main endpoint: http://localhost:8080
   - Health check: http://localhost:8080/health

## 🔧 Configuration

The application can be configured using environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` (local), `8080` (Docker) |
| `NAME` | Custom name for welcome message | Empty string |

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
├── Dockerfile          # Docker configuration
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Locked dependency versions
├── index.js            # Main application file
└── README.md           # This file
```

## 🐳 Docker Hub

This application is available on Docker Hub at: `pplx/hello-app`

Pull and run directly:
```bash
docker pull pplx/hello-app
docker run -p 8080:8080 pplx/hello-app
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request