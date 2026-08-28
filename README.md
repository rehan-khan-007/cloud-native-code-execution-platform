# ForgeRun

**Cloud infrastructure for remote development, isolated code execution, deployment, collaborative workspaces, persistent environments, ephemeral compute, and future AI coding-agent sandboxes.**

## Vision

ForgeRun is being designed as a cloud-native development and execution platform that provides developers with isolated, remotely accessible computing environments without requiring them to manage the underlying infrastructure.

The long-term platform direction includes:

- Remote development environments
- Isolated code execution
- Persistent workspaces
- Ephemeral compute
- Collaborative development environments
- Application deployment
- Browser-accessible development workflows
- Infrastructure for AI coding-agent sandboxes

ForgeRun is inspired by systems such as Replit and modern cloud development platforms, but is not intended to be a direct clone of any existing product.

## Current Status

**Status: Clean-slate / pre-implementation**

The previous repository contents were an experimental prototype/skeleton and have intentionally been removed from the working tree.

The Git history has been preserved for historical reference.

The current repository does **not** claim to have implemented Kubernetes orchestration, code execution, persistent workspaces, terminal access, deployment, collaboration, or AI-agent infrastructure.

Those capabilities will be designed and implemented incrementally.

## Engineering Direction

ForgeRun is intended to become a serious cloud-native engineering system rather than a demonstration project.

Engineering decisions will prioritize:

- isolation and security
- reliability and durability
- clear service boundaries
- reproducibility
- measurable performance
- operational visibility
- maintainability
- controlled infrastructure complexity

Technologies will be introduced because they solve concrete engineering problems, not merely to increase architectural complexity.

## Related Systems

ForgeRun may eventually interact with other projects in the broader engineering ecosystem, including:

- **AgentOS** — agent runtime and orchestration
- **EvalOS** — evaluation and benchmarking infrastructure
- **WoE** — its own execution/evaluation responsibilities

The exact boundaries and integration contracts between these systems have not yet been finalized.

ForgeRun should provide reusable execution and development infrastructure rather than unnecessarily duplicating capabilities belonging elsewhere.

## Development Status

This repository is currently being rebuilt from a clean foundation.

The architecture, requirements, security model, execution model, persistence model, testing strategy, scaling strategy, and operational model will be established through the engineering handoff process before or alongside implementation.

## Documentation

The authoritative engineering handoff is maintained in:

`FORGERUN_HANDOFF/`

The handoff is being developed progressively across 22 engineering phases.

The repository and verified implementation remain the source of truth for what is actually implemented.

Planned capabilities, architectural proposals, targets, and future work must not be represented as implemented functionality without supporting evidence.

## License

License and contribution policies will be established as the project matures.
