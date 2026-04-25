## Development Setup

### Backend
Backend Python 程式碼已集中在 **backend-python/**。

1. `pip install -r requirements.txt`
2. `python backend-python/ShakerService.py`

### Frontend
The actively maintained frontend is **frontend-vite**.

1. Run `npm install` from the repository root (installs only the maintained workspace dependencies).
2. Start the current frontend with `npm run dev` or `npx nx run frontend-vite:dev`.
3. Build production assets with `npm run build` or `npx nx run frontend-vite:build`.

The Vite application is available at `http://localhost:5173` and communicates with the Flask API on port `5000`.
