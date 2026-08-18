# Cloud-Native Code Execution Platform

A Kubernetes-based platform for provisioning isolated, persistent development environments with browser-accessible terminals and asynchronous workspace orchestration.

## Architecture

```
apps/          — User-facing applications
├── web/           — Next.js IDE (editor, terminal, file explorer)
└── api/           — Control-plane HTTP API

services/      — Infrastructure workers
├── orchestrator/  — Kubernetes workspace lifecycle management
└── runner/        — In-workspace PTY, filesystem, WebSocket server

packages/      — Shared TypeScript packages
└── shared/        — Types, schemas, constants

infra/         — Deployment & infrastructure
├── kubernetes/    — K8s manifests
├── docker/        — Workspace runtime images
└── terraform/     — AWS infrastructure

benchmarks/    — Performance & recovery benchmarks
tests/         — Unit, integration, failure-injection tests
docs/          — Architecture, decisions, diagrams
```

## Status

🚧 Active development.