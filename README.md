# 🚀 Taskly - Full Stack Task Manager

A professional, production-ready Full Stack Task Management application built with the **MERN** stack (**M**ongoDB, **E**xpress, **R**eact, **N**ode.js). Featuring a modern glassmorphism UI, secure JWT authentication, and full CRUD capabilities.

---

## ✨ Features

- **🔐 Secure Authentication**: JWT-based login and signup with password hashing (bcrypt).
- **📝 Task Management**: Create, read, update, and delete tasks with real-time state updates.
- **🎨 Modern UI/UX**: Aesthetic gradient design with glassmorphism effects and responsive layouts.
- **🛡️ Protected Routes**: Authorized access only to user-specific dashboards and data.
- **⚡ Performance**: Built with Vite for lightning-fast frontend development and optimized builds.
- **🔍 Error Handling**: Robust global error handling and user-friendly feedback.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (Vite)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **HTTP Client**: Axios (with centralized interceptors)
- **Styling**: Vanilla CSS (Custom Glassmorphism Design)

### Backend
- **Runtime**: Node.js & Express
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JSON Web Tokens (JWT) & Bcryptjs
- **Environment**: Dotenv for secure configuration

---

## 📁 Project Structure

```text
├── client/                # React Frontend (Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI components (Navbar, TaskCard)
│   │   ├── pages/         # Page views (Dashboard, Login, Signup)
│   │   ├── services/      # API communication logic (Axios config)
│   │   ├── App.jsx        # Routing & Main logic
│   │   └── index.css      # Core styles & Design tokens
│   └── vite.config.js     # Frontend config & Proxy setup
│
├── server/                # Node.js/Express Backend
│   ├── config/            # DB connection & Token utilities
│   ├── controllers/       # Business logic for routes
│   ├── models/            # MongoDB Schemas (User, Task)
│   ├── routes/            # API endpoint definitions
│   ├── middleware/        # Auth guards & Error handlers
│   └── server.js          # Main entry point
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v16+)
- MongoDB Atlas account or local MongoDB instance

### 2. Backend Setup
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your credentials:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_random_secret_key
   NODE_ENV=development
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:3000`

---

## 🔗 API Endpoints

### Auth
- `POST /api/users` - Register a new user
- `POST /api/users/login` - Authenticate user & get token
- `GET /api/users/me` - Get current user profile (Protected)

### Tasks
- `GET /api/tasks` - Fetch all tasks for logged-in user (Protected)
- `POST /api/tasks` - Create a new task (Protected)
- `PUT /api/tasks/:id` - Update a task (Protected)
- `DELETE /api/tasks/:id` - Delete a task (Protected)

---

## 👨‍💻 Best Practices Followed
- **Separation of Concerns**: Clean MVC-like architecture.
- **Security**: Environment variables for secrets, JWT for stateless auth.
- **UX**: Loading states, error alerts, and intuitive navigation.
- **Scalability**: Modular folder structure.

---

## 📄 License
This project is for educational and portfolio purposes. Feel free to use it for your own learning!
