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