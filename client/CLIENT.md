## SafeCitizen119 Client Monorepo Documentation

### Overview

This monorepo contains all frontend applications for the SafeCitizen119 platform:

- **SafeCitizen**: Mobile app for regular citizens (React Native + TypeScript)
- **SafeCitizenPatrol**: Mobile app for police officers (React Native + TypeScript)
- **safe-citizen-hq**: Web dashboard for HQ agents (Next.js + TypeScript)

All projects are structured for scalability, maintainability, and alignment with a microservices backend, while leveraging monorepo benefits (shared code, unified tooling, consistent standards).

---

## Monorepo Structure

```
client/
│
├── SafeCitizen/         # Citizen mobile app (React Native)
├── SafeCitizenPatrol/   # Police officer mobile app (React Native)
├── safe-citizen-hq/     # HQ web dashboard (Next.js)
└── CLIENT.md            # This documentation
```

---

## 1. SafeCitizen (Mobile App for Citizens)

- **Tech Stack**: React Native, TypeScript
- **Assigned to**: Upek

### Architecture

- **App Entry**: `app/_layout.tsx` (navigation, theme, context providers)
- **Tabs**: `app/(tabs)/` (modular tab navigation)
- **Components**: `components/` (UI, shared logic)
- **Assets**: `assets/` (images, fonts)
- **Constants & Hooks**: `constants/`, `hooks/` (theme, color, utilities)
- **State Management**: Context API or Zustand (recommended for scalability)
- **API Layer**: Service classes or hooks for REST/gRPC/WebSocket calls to backend microservices
- **Theming**: Centralized in `constants/Colors.ts` and theme hooks
- **Error Handling**: Global error boundary, toast notifications
- **Testing**: Jest, React Native Testing Library

#### Microservices Alignment

- Each feature (e.g., SOS, reporting, notifications) should interact with a dedicated backend service via a typed API client.
- Use environment variables for service endpoints.
- Modularize features for easy future extraction or migration.

#### Architectural Diagram (Plaintext)

```
┌─────────────────────────────┐
│      SafeCitizen App        │
│  (React Native + TS)        │
├─────────────┬───────────────┤
│ Navigation  │  Context      │
│  (Tabs)     │  Providers    │
├─────────────┴───────────────┤
│   Feature Modules           │
│  (SOS, Reports, Alerts, etc)│
├─────────────┬───────────────┤
│ Components  │  Hooks        │
├─────────────┴───────────────┤
│   API Service Layer         │
├─────────────────────────────┤
│   Shared Types/Utils        │
├─────────────────────────────┤
│   Assets (Images, Fonts)    │
└─────────────┬───────────────┘
							│
							▼
			┌─────────────────────┐
			│ Backend Microservices│
			└─────────────────────┘
```

---

## 2. SafeCitizenPatrol (Mobile App for Police Officers)

- **Tech Stack**: React Native, TypeScript
- **Assigned to**: Ravishka

### Architecture

- **App Entry**: `app/_layout.tsx`
- **Tabs**: `app/(tabs)/` (e.g., Incidents, Patrol, Profile)
- **Components**: `components/` (reusable UI, logic)
- **Assets**: `assets/`
- **Constants & Hooks**: `constants/`, `hooks/`
- **State Management**: Context API or Zustand
- **API Layer**: Typed clients for microservices (incident, patrol, user)
- **Theming**: Shared with SafeCitizen for consistency
- **Role-based Access**: Guards and context for officer permissions
- **Testing**: Jest, React Native Testing Library

#### Microservices Alignment

- Features (incident management, patrol tracking, communication) map to backend services.
- Use WebSockets for real-time updates (e.g., incident assignments).
- Modularize for future feature expansion.

#### Architectural Diagram (Plaintext)

```
┌────────────────────────────────────┐
│    SafeCitizenPatrol App           │
│   (React Native + TS)              │
├─────────────┬──────────────────────┤
│ Navigation  │  Context Providers   │
│  (Tabs)     │                      │
├─────────────┴──────────────────────┤
│   Feature Modules                  │
│ (Incidents, Patrol, Profile, etc)  │
├─────────────┬──────────────────────┤
│ Components  │  Hooks               │
├─────────────┴──────────────────────┤
│   API Service Layer                │
├────────────────────────────────────┤
│   Shared Types/Utils               │
├────────────────────────────────────┤
│   Assets (Images, Fonts)           │
└─────────────┬──────────────────────┘
							│
							▼
			┌────────────────────────────┐
			│ Backend Microservices      │
			└────────────────────────────┘
```

---

## 3. safe-citizen-hq (Web Dashboard for HQ Agents)

- **Tech Stack**: Next.js, TypeScript, TailwindCSS
- **Assigned to**: Thilina

### Architecture

- **App Entry**: `src/app/layout.tsx`
- **Pages**: `src/app/` (Next.js App Router)
- **Components**: `src/components/` (UI, dashboard widgets)
- **Public Assets**: `public/`
- **Styling**: TailwindCSS, custom themes
- **State Management**: React Context, SWR/React Query for data fetching
- **API Layer**: Typed clients for microservices (user, incident, analytics)
- **Authentication**: JWT or OAuth (integrate with backend auth microservice)
- **Role-based Access**: Guards for agent/admin roles
- **Testing**: Jest, React Testing Library, Cypress (for E2E)

#### Microservices Alignment

- Each dashboard module (e.g., incident overview, analytics, user management) fetches from a dedicated backend service.
- Use SSR/ISR for real-time data where needed.
- Modularize dashboard widgets for reusability.

#### Architectural Diagram (Plaintext)

```
┌────────────────────────────────────────────┐
│         safe-citizen-hq Dashboard          │
│         (Next.js + TS + Tailwind)          │
├─────────────┬──────────────────────────────┤
│ Layout      │  Context Providers           │
├─────────────┴──────────────────────────────┤
│   Pages (App Router)                       │
├─────────────┬──────────────────────────────┤
│ Components  │  Dashboard Modules           │
│ (UI, Widgets│  (Incidents, Analytics, etc) │
├─────────────┴──────────────────────────────┤
│   API Service Layer                        │
├────────────────────────────────────────────┤
│   Shared Types/Utils                       │
├────────────────────────────────────────────┤
│   Public Assets (SVG, Images)              │
└─────────────┬──────────────────────────────┘
							│
							▼
			┌────────────────────────────┐
			│ Backend Microservices      │
			└────────────────────────────┘
```

---

## Shared Monorepo Practices

- **Code Sharing**: Extract common utilities, types, and API clients into a shared package (e.g., `client/shared/`).
- **Linting & Formatting**: Unified ESLint and Prettier configs.
- **Type Safety**: Use TypeScript throughout, share types with backend via a types package if possible.
- **CI/CD**: Set up per-app build/test pipelines, with monorepo-aware caching.
- **Environment Management**: Use `.env` files per app, never commit secrets.
- **Documentation**: Maintain per-app README and a root `CLIENT.md`.

---

## Example: Microservices-Oriented API Layer

```ts
// client/SafeCitizen/services/IncidentService.ts
import { API_BASE_URL } from '../constants/env';

export const fetchIncidents = async () => {
	const res = await fetch(`${API_BASE_URL}/incidents`);
	if (!res.ok) throw new Error('Failed to fetch incidents');
	return res.json();
};
```

---

## Example: Shared Types

```ts
// client/shared/types/incident.ts
export interface Incident {
	id: string;
	type: string;
	status: 'open' | 'assigned' | 'closed';
	location: { lat: number; lng: number };
	reportedAt: string;
}
```

---

## Best Practices

- Modularize features for easy maintenance and future migration to separate repos/services.
- Use feature folders for scalability.
- Prefer composition over inheritance for UI components.
- Write unit and integration tests for all critical logic.
- Follow accessibility and responsive design best practices (especially for HQ dashboard).
- Document all public APIs and shared types.

---

## Getting Started

1. Install dependencies for each app:
	 ```sh
	 cd client/SafeCitizen && npm install
	 cd ../SafeCitizenPatrol && npm install
	 cd ../safe-citizen-hq && npm install
	 ```
2. Run apps locally:
	 - SafeCitizen: `npx expo start`
	 - SafeCitizenPatrol: `npx expo start`
	 - safe-citizen-hq: `npm run dev`

---

## Contributors

- **Upek**: SafeCitizen (Citizen App)
- **Ravishka**: SafeCitizenPatrol (Police App)
- **Thilina**: safe-citizen-hq (HQ Dashboard)

---

For more details, see each app's `README.md` and the root `CLIENT.md`.
