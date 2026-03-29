# 📝 NORI - Notes, Organization, Reminders & Ideas

NORI is a modern full-stack note-taking application designed to help users efficiently manage notes, ideas, and reminders in a clean and organized way. It provides a fast and responsive user experience along with backend optimizations like rate limiting using Redis.

---

## 🚀 Features

* 📝 Create, edit, and delete notes
* 📂 Organized note management
* ⚡ Fast and responsive UI
* 🔐 RESTful backend APIs
* 🚫 Rate limiting using Redis (prevents abuse & improves security)
* 🌐 Scalable backend architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS / CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Caching & Optimization

* Redis (used for rate limiting)

---

## ⚙️ How It Works

1. Users interact with the frontend UI to manage notes
2. Requests are sent to the backend server
3. Backend processes requests and stores/retrieves data from MongoDB
4. Redis monitors request frequency and applies rate limiting

---

## 🧠 Redis Rate Limiting (Key Highlight)

NORI uses Redis-based rate limiting to:

* Limit excessive API requests
* Prevent spam and brute-force attacks
* Improve backend stability under heavy traffic

---

## 📦 Installation & Setup

### 1️ Clone the repository

```bash
git clone https://github.com/anjali-2201/NORI.git
cd NORI
```

### 2 Setup environment variables

Create a `.env` file in the root directory:

```env
MONGO_URI=<your_mongo_uri>
PORT = 5001
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

### 3 Run the backend

```bash
cd backend
npm install
npm run dev
```

### 5️⃣ Run the frontend (if separate)

```bash
cd frontend
npm install
npm start
```

---

## 📁 Project Structure

```
NORI/
│── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   └── config/
│
│── frontend/
│   ├── src/
│   └── components/
│
│── .env
│── package.json
```

---

## 🎯 Future Improvements

* 🔐 User authentication (JWT)
* 🔍 Search and filter notes
* 🏷️ Tags and categories
* 📝 Rich text editor
* ☁️ Deployment (AWS / Vercel / Render)
* 🔄 Real-time sync

---

## 💡 Inspiration

Inspired by productivity tools like Notion and Google Keep, NORI aims to provide a lightweight yet powerful alternative for everyday note management.

---

## 👩‍💻 Author

**Anjali**

