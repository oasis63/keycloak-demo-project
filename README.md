# Keycloak Demo Project

A demonstration project showcasing integration with Keycloak for authentication and authorization. This project includes a backend API and a frontend application, both containerized using Docker.

## Features

- User authentication via Keycloak
- Protected and public pages
- RESTful API with authentication routes
- Document management endpoints
- Docker containerization for easy deployment

## Project Structure

- `keycloak-backend-app/`: Node.js backend application with Express.js
- `keycloak-front-app/`: React frontend application built with Vite
- `docker-compose.yml`: Docker Compose configuration for running the entire stack

## Prerequisites

- Docker and Docker Compose installed
- Node.js (for local development)
- Git

## Quick Start

To run the application using Docker Compose:

```bash
docker compose up --build
```

Then access the frontend at http://localhost:4000 and backend at http://localhost:3000.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd KEYCLOAK_PROJECT
   ```

2. Ensure Docker and Docker Compose are running.

## Running the Application

1. Start the services using Docker Compose:

   ```bash
   docker-compose up --build
   ```

2. Access the applications:
   - Frontend: http://localhost:4000
   - Backend API: http://localhost:3000
   - Keycloak Admin Console: http://localhost:8080 (admin/admin)

## Usage

### Frontend

- Public Page: Accessible without authentication
- Protected Page: Requires user login via Keycloak

### Backend API

- `GET /api/authenticate`: Authentication endpoint
- `GET /api/documents`: Retrieve documents (protected)
- `POST /api/documents`: Create a new document (protected)

## Configuration

- Keycloak realm configuration is in `keycloak-front-app/realm-export.json`
- Environment variables can be set in the Docker Compose file or `.env` files

## Development

For local development:

1. Install dependencies for each app:

   ```bash
   cd keycloak-backend-app && npm install
   cd ../keycloak-front-app && npm install
   ```

2. Run Keycloak separately or use Docker Compose.

3. Start the backend:

   ```bash
   cd keycloak-backend-app && npm start
   ```

4. Start the frontend:

   ```bash
   cd keycloak-front-app && npm run dev
   ```

   - Frontend running at http://localhost:5173
   - Backend at http://localhost:3000

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
