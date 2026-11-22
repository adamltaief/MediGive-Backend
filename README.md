# MediGive Monorepo

This project contains both the **MediGive Backend** and **MediGive Frontend** unified into a single monorepo repository.

## Project Structure
- `backend/` — Express.js REST API and MongoDB Mongoose models.
- `frontend/` — React.js single-page application.

## Getting Started

1. **Install all dependencies (Backend & Frontend)**:
   ```bash
   npm run install-all
   ```

2. **Run both Backend and Frontend concurrently**:
   ```bash
   npm run dev
   ```
   - Backend runs on `http://localhost:8000`
   - Frontend runs on `http://localhost:3000` (proxied or configured to talk to backend API)
