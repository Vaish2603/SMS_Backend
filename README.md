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
```bash
npm install
```

3. Create an empty uploads directory in the root.

4. Configure environment variables:
```bash
cp .env.example .env
```
Open .env and fill in your local database credentials.

5. Initialize Database:

Import and run your MySQL schema scripts locally.

6. Start the server:
```bash
node server.js
```
The API will run on http://localhost:5000



## Push The Code on GitHub
# Run these commands inside the folder,
```bash
git init
git add .
git commit -m "Initial commit: decoupled architecture infrastructure setup"
git remote add origin https://github.com/your-username/your-specific-repo-name.git
git branch -M main
git push -u origin main
```

1. Pushing Local Changes to GitHub -->
When you add features or fix a route, save and upload your progress:
```bash
git status
git add .
git commit -m "add commits"
git push origin main

```
2. Pulling Remote Modifications
Always pull the latest changes before starting a new coding session to stay in sync with the repository:
```bash
git pull origin main

```
3. Resolving Merge Conflicts
- If you and a collaborator edit the same file row, Git will mark a merge conflict.
- Open the file in VS Code.
- Locate the conflict markers (<<<<<<< HEAD, =======, >>>>>>>).
- Manually edit or select Accept Current Change, Accept Incoming Change, or Accept Both.
- Save the file and clear the conflict status:

```bash
git add <resolved_file_path>
git commit -m "fix: resolved merge routing conflict parameters"
git push origin main
```