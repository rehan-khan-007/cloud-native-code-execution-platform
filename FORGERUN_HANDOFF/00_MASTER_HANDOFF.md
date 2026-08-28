# ForgeRun — Master Engineering Handoff

**Project:** ForgeRun  
**Repository:** `cloud-native-code-execution-platform`  
**Handoff status:** Phase 0  
**Implementation status:** Clean-slate / pre-implementation

---

## 1. Purpose of This Handoff

This directory is the authoritative engineering handoff for ForgeRun.

Its purpose is to allow a Principal Software Engineer or another capable engineering model to continue the project without requiring access to previous conversations.

The handoff records:

- project intent
- current implementation state
- requirements
- architecture
- engineering decisions
- security constraints
- execution and isolation model
- reliability model
- testing strategy
- performance expectations
- operational model
- acceptance criteria
- roadmap
- technical debt
- unresolved questions
- model/session continuity

The handoff must remain grounded in evidence.

---

## 2. Project Identity

### Product

**ForgeRun**

### Repository

`cloud-native-code-execution-platform`

### Product direction

ForgeRun is intended to become cloud infrastructure for:

1. Remote development
2. Isolated code execution
3. Deployment
4. Collaborative workspaces
5. Persistent development environments
6. Ephemeral compute
7. Future AI coding-agent sandboxes

The platform is broader than a Replit clone.

Replit-style architecture is an important source of architectural inspiration, particularly around remote development environments, isolated execution, persistent workspaces, terminal access, and cloud-native orchestration.

---

## 3. Current Repository State

The repository has intentionally been reset to a clean working-tree foundation.

The previous experimental implementation was removed from the working tree.

Git history has been preserved.

At the beginning of Phase 0, the intended working-tree state is:

```text
repository/
├── .git/
└── [new ForgeRun files created during Phase 0]
The previous implementation must not be represented as current functionality.

Historical repository information may be used as historical context when useful, but it is not evidence of the current implementation.

4. Evidence Rules

This handoff follows a strict evidence model.

Every significant claim about the project must be understood as one of:

IMPLEMENTED
PARTIALLY IMPLEMENTED
SKELETON / STUB
PLANNED
PROPOSED
ASSUMED
UNKNOWN
REQUIRES VERIFICATION

Never convert an architectural intention into an implementation claim.

Never invent:

benchmark results
latency numbers
scalability numbers
security guarantees
failure-recovery results
deployment results
infrastructure capabilities
test results
production-readiness claims

Any resume metric must eventually be supported by reproducible engineering evidence.

5. Engineering Philosophy

ForgeRun should be developed as a serious cloud-native product.

Complexity is justified only when it solves a real problem.

The project should avoid:

technology for appearance
premature microservices
unnecessary infrastructure
duplicated functionality
fake benchmarks
undocumented architectural assumptions
security-by-assumption
operational complexity without measurable benefit

The architecture should evolve from explicit requirements and constraints.

6. Relationship With Other Projects

ForgeRun exists within a broader engineering ecosystem that may include:

ForgeRun

Execution and development infrastructure.

Potential responsibilities include:

isolated compute
development environments
workspace lifecycle
persistent storage
terminal access
deployment infrastructure
sandbox infrastructure
AgentOS

Agent runtime/orchestration.

ForgeRun may eventually provide execution environments that AgentOS can use.

EvalOS

Evaluation and benchmarking.

ForgeRun may eventually provide controlled execution environments or infrastructure used by evaluation systems.

WoE

WoE has its own execution/evaluation responsibilities.

ForgeRun should not automatically reproduce functionality that already belongs there.

The exact interfaces and boundaries remain an engineering decision to be established later.

7. Long-Term Capability Direction

The intended evolution is approximately:

ForgeRun
│
├── Remote Development
│   ├── Persistent Workspaces
│   ├── Collaborative Workspaces
│   └── Browser-based Development
│
├── Code Execution
│   ├── Isolated Environments
│   ├── Ephemeral Compute
│   └── Resource Controls
│
├── Deployment
│   ├── Build
│   ├── Artifact Management
│   └── Application Serving
│
└── Agent Infrastructure
    └── Secure AI Coding-Agent Sandboxes

This is a product direction, not a statement of current implementation.

8. Handoff Development Plan

The engineering handoff is divided into 22 phases.

Part 1 — Project & Architecture
Repository & Current-State Reconstruction
Product/System Context
Requirements & Scope
Target System Architecture
Component & Service Design
Data / State / Storage Model
API & Service Contracts
Architectural Decisions & Engineering Constraints
Part 2 — Production Engineering
Security & Threat Model
Isolation / Sandbox / Execution Model
Failure / Recovery / Durability Model
Testing & Validation Strategy
Performance / Scaling / Capacity Model
Observability / Operations
Engineering Standards & Quality Gates
Part 3 — Continuity & Final Handoff
Acceptance Criteria
Implementation Roadmap
Current Implementation State
Known Risks / Technical Debt
Open Questions
Session / Model Handoff Protocol
Master Handoff & Final CTO Review

Each phase should produce a useful engineering artifact.

The phases should not be treated as permission to implement the platform.

Implementation begins only when explicitly authorized.

9. Repository Ownership

The repository owner remains responsible for executing changes.

Engineering models may:

inspect available project context
reason about architecture
produce documentation
produce implementation plans
provide exact file contents
provide exact terminal commands

The repository owner performs:

file creation
file modification
command execution
testing
Git commits
Git pushes

No model should claim that a local command, commit, or push occurred unless the repository owner has actually performed it.

10. Git Principle

Git history is part of the project's engineering record.

Normal development should use small, meaningful commits.

Force pushes and history rewriting should not be used unless explicitly authorized.

Handoff phases should normally result in a corresponding documentation commit so that the Git history records how the engineering specification evolved.

11. Current Phase

Phase 0 — ForgeRun Handoff Foundation

This phase establishes the project identity and handoff mechanism.

No production functionality is implemented by this phase.

12. Next Phase

Phase 1 — Repository & Current-State Reconstruction

Phase 1 will establish the authoritative current repository state after the clean-slate reset.

It must distinguish the actual current repository from historical information about the deleted prototype.

13. Handoff Continuity Rule

At every stage, a future engineer should be able to answer:

Where are we?
What has actually been completed?
What is being designed?
What is still only proposed?
Which decisions are locked?
Which decisions remain open?
What must not be changed casually?
What evidence supports the current claims?
What is the next engineering action?

If the handoff cannot answer these questions, it is incomplete.

14. Phase 0 Status

COMPLETE AFTER THIS DOCUMENT AND README ARE COMMITTED TO GIT.

Current implementation:

CLEAN-SLATE / PRE-IMPLEMENTATION

No claims of production functionality are made by this document.
