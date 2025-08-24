# 🎉 Event Management Backend

**Author:** Goutam Chandra Gharami  
**Email:** dev.goutam05@gmail.com

Backend project built with **Node.js, Express, MongoDB, JWT** for user authentication and event management.

---

## 🗂 Folder Structure

event-management-backend/  
├── server.js  
├── package.json  
├── .env.example  
├── config/  
│   └── db.js  
├── controllers/  
│   ├── authController.js  
│   └── eventController.js  
├── models/  
│   ├── User.js  
│   └── Event.js  
├── middleware/  
│   └── authMiddleware.js  
├── routes/  
│   ├── authRoutes.js  
│   └── eventRoutes.js  
└── frontend/  
    ├── login.html  
    └── styles.css  

---

## ⚙️ Installation & Setup

# Clone the repository
git clone https://github.com/your-username/event-management-backend.git
cd event-management-backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Update .env with your PORT, MONGO_URI, JWT_SECRET

# Run the server
npm run dev

---

## 🌐 API Endpoints

| Method | Endpoint               | Description          | Protected       |
|--------|-----------------------|--------------------|----------------|
| POST   | /api/auth/register    | Register new user   | ❌             |
| POST   | /api/auth/login       | Login & set cookie  | ❌             |
| GET    | /api/auth/profile     | Get user profile    | ✅             |
| PUT    | /api/auth/profile     | Update user profile | ✅             |
| POST   | /api/events           | Create new event    | ✅             |
| GET    | /api/events           | Get all events      | ❌             |
| GET    | /api/events/:id       | Get single event    | ❌             |
| PUT    | /api/events/:id       | Update event        | ✅ (owner)     |
| DELETE | /api/events/:id       | Delete event        | ✅ (owner)     |

---

## 🎨 Frontend

- Login page: frontend/login.html  
- Stylesheet: frontend/styles.css  
- Connects to: http://localhost:5000/api/auth/login

---

## 📜 License

This project is for **educational purposes only**.
