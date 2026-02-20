# FoundOS Care Operations Platform

Fullstack SaaS proof of concept for modern care home management.

## Tech Stack
- Backend: TypeScript + Node.js + Express
- Frontend: React + TypeScript + Vite
- Runtime: Docker + Kubernetes manifests
- AI: LLM-ready transcription summarization and occupancy risk scoring endpoints
- Integrations: Accounting and care planning adapter layer (QuickBooks/Sage style patterns)

## Product Modules
- Enquiry tracking pipeline
- Occupancy management
- Billing lifecycle
- Analytics dashboard
- AI assist APIs for admin productivity

## Run Locally
### Prerequisites
- Node.js 20+
- npm 10+

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Docker
```bash
docker compose up --build
```

## Endpoints
- Backend health: `http://localhost:4000/health`
- Enquiries: `http://localhost:4000/api/enquiries`
- Occupancy: `http://localhost:4000/api/occupancy`
- Billing: `http://localhost:4000/api/billing`
- AI summary: `http://localhost:4000/api/ai/transcription-summary`
- Analytics: `http://localhost:4000/api/analytics/overview`

## GitHub
github.com/nithishakorukanti/foundos-care-operations-platform
