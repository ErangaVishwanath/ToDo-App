# 📝 To-Do App

A full-stack To-Do application built with **React (Frontend)**, **Node.js (Backend)**, and **MySQL (Database)**.  
It allows users to add tasks, view the latest 5 pending tasks, and mark them as completed.

---

## 🚀 Features
✅ Add new tasks  
✅ View the latest 5 pending tasks  
✅ Mark tasks as completed  
✅ Full CRUD API with REST endpoints  
✅ Dockerized for easy deployment  

---

## 📂 Project Structure
```
todo-app/
│── backend/                 # Backend (Node.js + Express + Sequelize)
│   ├── models/              # Sequelize models
│   ├── routes/              # API routes
│   ├── controllers/         # Business logic for API
│   ├── config/              # Database configuration
│   ├── server.js            # Entry point
│   ├── package.json         # Dependencies
│   ├── Dockerfile           # Backend Docker setup
│── frontend/                # Frontend (React + Vite + Tailwind)
│   ├── src/
│   │   ├── components/      # UI Components
│   │   ├── App.js           # Main component
│   │   ├── index.js         # Entry point
│   ├── package.json         # Dependencies
│   ├── Dockerfile           # Frontend Docker setup
│── docker-compose.yml       # Docker configuration for backend, frontend, MySQL
│── README.md                # Project documentation
```

---

## 🛠️ **Setup Instructions**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### **2️⃣ Setup Backend**
#### Install dependencies:
```sh
cd backend
npm install
```
#### Configure Database:
Create a **`.env`** file in the `backend/` folder:
```
DB_HOST=mysql
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=todo_db
PORT=5000
```
#### Run Backend:
```sh
npm run dev
```

---

### **3️⃣ Setup Frontend**
#### Install dependencies:
```sh
cd ../frontend
npm install
```
#### Start Frontend:
```sh
npm run dev
```
Your app should now be running at **http://localhost:5173** 🚀

---

## 🐳 **Run with Docker**
If you prefer running the app using Docker, follow these steps:

#### **1️⃣ Build and Start Containers**
```sh
docker-compose up --build -d
```
This will start:
- **MySQL** on port `3306`
- **Backend** on port `5000`
- **Frontend** on port `3000`

#### **2️⃣ Stop Containers**
```sh
docker-compose down
```

---

## ✅ **API Endpoints**
| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| GET    | `/api/tasks`        | Fetch latest 5 tasks        |
| POST   | `/api/tasks`        | Create a new task           |
| PUT    | `/api/tasks/:id`    | Mark a task as completed    |

---

## 🧪 **Running Tests**
### **Backend Unit Tests**
```sh
cd backend
npm test
```

### **Frontend Unit Tests**
```sh
cd frontend
npm test
```

---

## 🛠️ **Built With**
- **Frontend:** React, Vite, Tailwind CSS  
- **Backend:** Node.js, Express, Sequelize  
- **Database:** MySQL  
- **Testing:** Jest, Supertest, React Testing Library  
- **Deployment:** Docker, Docker Compose  

---

## 🤝 **Contributing**
1. **Fork** this repository  
2. **Create a branch** (`git checkout -b feature-name`)  
3. **Commit your changes** (`git commit -m 'Add feature'`)  
4. **Push to the branch** (`git push origin feature-name`)  
5. **Create a Pull Request** 🚀  

---

## 📜 **License**
This project is licensed under the **MIT License**.

---

### 🚀 **Happy Coding!** 😃

