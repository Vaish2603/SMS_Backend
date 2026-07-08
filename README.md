# School Management System - Backend API

This repository contains the REST API server powering the School Management System, built with Node.js, Express, and MySQL.

## 🛠️ Tech Stack
- Node.js & Express
- MySQL (with connection pooling)
- Multer (Multipart form data / files upload handling)
- JWT & BcryptJS (Authentication & Encryption)

## 💻 Local Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/school-system-backend.git](https://github.com/your-username/school-system-backend.git)
   cd school-system-backend

2. Install dependencies:
- >> npm install

3. Create an empty uploads directory in the root.

4. Configure environment variables:
- >> cp .env.example .env
Open .env and fill in your local database credentials.

5. Initialize Database:

Import and run your MySQL schema scripts locally.

6. Start the server:
- >> node server.js
The API will run on http://localhost:5000


## 🚀 How to Push Them to GitHub Separately

Since they are independent, you will open **two separate terminal windows** (one in your frontend project folder, one in your backend folder) and execute the Git initialization steps inside each one:

```bash
# Run these commands inside the backend folder, and then repeat inside the frontend folder
git init
git add .
git commit -m "Initial commit: decoupled architecture infrastructure setup"
git remote add origin https://github.com/your-username/your-specific-repo-name.git
git branch -M main
git push -u origin main