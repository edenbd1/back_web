# ⚙️ Contact Manager API

<div align="center">
  <h3>Powerful Backend for Contact Management</h3>
  <p>RESTful API | MongoDB | Express | Node.js</p>
</div>

![API Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📡 API Overview

Contact Manager API is a robust RESTful service that powers the Contact Manager application. Built with scalability and security in mind, it provides a comprehensive backend solution for managing contacts and user authentication.

## 🔑 Core Features

- **👤 User Authentication**
  - Secure registration and login
  - JWT-based token authentication
  - Password encryption with bcrypt

- **📋 Contact Management**
  - Create, read, update, and delete operations
  - User-specific contact storage
  - Detailed contact information support

- **🛡️ Security**
  - Protected routes
  - Input validation
  - Error handling

## 🚀 Quick Start

### Requirements

- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/edenbd1/back_web.git
   cd back_web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/contact-manager
   JWT_SECRET=your_secure_secret
   ```

4. **Start the server**
   ```bash
   # Production mode
   npm start
   
   # Development mode with auto-reload
   npm run dev
   ```

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint           | Description       | Request Body                                           |
|--------|-------------------|-------------------|-------------------------------------------------------|
| POST   | `/api/auth/register` | Create new user   | `{ "username": "user", "email": "user@example.com", "password": "securepass" }` |
| POST   | `/api/auth/login`    | Authenticate user | `{ "email": "user@example.com", "password": "securepass" }` |

### Contact Endpoints

| Method | Endpoint            | Description         | Authentication |
|--------|-------------------|---------------------|---------------|
| GET    | `/api/contacts`     | Get all user contacts | Required     |
| POST   | `/api/contacts`     | Create new contact   | Required     |
| GET    | `/api/contacts/:id` | Get contact by ID    | Required     |
| PUT    | `/api/contacts/:id` | Update contact       | Required     |
| DELETE | `/api/contacts/:id` | Delete contact       | Required     |

### Request Example

```bash
# Retrieve all contacts
curl -X GET \
  https://api.contactmanager.com/api/contacts \
  -H 'Authorization: Bearer YOUR_JWT_TOKEN'
```

### Response Example

```json
{
  "success": true,
  "contacts": [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "name": "John",
      "surname": "Doe",
      "email": "john@example.com",
      "phone": "+1-555-555-5555",
      "company": "Tech Corp",
      "createdAt": "2023-10-30T14:48:00.000Z",
      "updatedAt": "2023-10-30T14:48:00.000Z"
    }
  ]
}
```

## 🔧 Technical Implementation

### Architecture

The API follows a modular design pattern:
- **Routes**: Define API endpoints
- **Controllers**: Handle request and response logic
- **Models**: Define data schemas and interactions
- **Middleware**: Provide authentication and validation

### Technologies

- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: Authentication mechanism
- **Bcrypt**: Password hashing

## 🛠️ Development

### Project Structure

```
src/
├── handlers/          # Request handlers
├── middlewares/       # Custom middlewares (auth, validation)
├── routes/            # API route definitions
├── models/            # Mongoose schemas and models
├── utils/             # Helper functions
└── index.js           # Application entry point
```

### Testing

The API includes HTTP request samples in `test/api.http` that can be used with REST Client extension for VS Code.

## 🔮 Future Roadmap

- OAuth integration
- Pagination for large contact lists
- Rate limiting
- Advanced filtering and sorting
- Contact grouping and tagging
- Metrics and analytics

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>© 2025 Eden. All rights reserved.</p>
  <p>
    <b>Contact Manager API</b> - v1.0.0
  </p>
</div>