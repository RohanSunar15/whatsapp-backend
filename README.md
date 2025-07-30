# 🛠 WhatsApp Clone – Backend

This is the backend of the WhatsApp Clone application built using **Node.js**, **Express**, and **MongoDB**, with **Firebase Admin SDK** for secure token verification after OTP authentication.

It handles core backend logic like:
- Firebase token verification
- User registration and profile management
- One-on-one messaging
- RESTful API endpoints

---

## 📦 Tech Stack

- **Node.js** – JavaScript runtime
- **Express** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM
- **Firebase Admin SDK** – Verifying Firebase ID tokens
- **dotenv** – Environment variable support
- **CORS & Helmet** – Middleware for security

---

## 🚀 Features

- ✅ Phone authentication with Firebase (verified by backend)
- ✅ Create and update user profiles
- ✅ Send and receive chat messages
- ✅ Fetch user details and chat history
- ✅ Token-based secure API routes

---
## 🔐 Environment Setup

Create a `.env` file inside the `backend/` folder with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"

````

### 🔗 Frontend Repository

The frontend is built using Flutter and handles the user interface, authentication via Firebase OTP, and integrates with this backend via REST APIs.

📱 [👉 View Frontend GitHub Repository](https://github.com/RohanSunar15/whatsapp_clone)

