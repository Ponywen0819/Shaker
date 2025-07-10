## Development Setup

### Backend
1. `pip install -r requirements.txt`
2. `python ShakerService.py`

### Frontend
The project now uses **Nx** to manage multiple front-end apps.

1. Run `npm install` from the repository root. This installs dependencies and the Nx CLI.
2. Start a frontend with `npx nx run frontend:dev` or `npx nx run frontend-vite:dev`.

The Vite application is available at `http://localhost:5173` and communicates with the Flask API on port `5000`.
