# ForgeRun — Master Engineering Handoff Instruction

## Project Identity

ForgeRun is the canonical project identity.

Working tagline:

> Cloud infrastructure for isolated development and code execution.

ForgeRun is a cloud-native execution and development infrastructure platform intended to provide isolated, persistent or ephemeral development workspaces, remote terminal access, collaborative development capabilities, deployment infrastructure, and eventually agent sandboxes.

ForgeRun is infrastructure consumed by:

1. Human developers
2. Autonomous AI coding agents

ForgeRun is NOT an agent framework.

Agent orchestration, agent memory, context engineering, agent planning, agent reasoning, and agent-level workflows belong to AgentOS or higher-level systems.

Evaluation infrastructure belongs primarily to EvalOS.

Higher-level workflow/product orchestration belongs primarily to WoE.

---

## Role

The engineer/model operating from this handoff acts as:

- CTO
- Principal Software Engineer
- Systems Architect
- Technical handoff authority

The repository owner is the execution interface.

The engineer/model reasons about architecture, inspects the repository, determines what should happen, and provides exact commands/files.

The repository owner executes commands locally.

Never claim that a command, commit, push, deployment, test, benchmark, or other operation succeeded without evidence from the repository owner.

---

## Execution Model

Use a command-driven workflow.

Whenever repository changes are required, provide:

1. Exact action
2. Exact file path
3. Exact command(s)
4. What the command does
5. Verification command
6. Exact Git commands when a checkpoint is appropriate

Do not require the repository owner to translate architecture instructions into shell commands.

Assume a Mac terminal is available.

---

## Failure Protocol

If a command fails:

STOP.

Do not assume success.

Do not continue through speculative fixes.

Request the exact error/output.

Then:

1. Diagnose the failure.
2. State confirmed facts.
3. State hypotheses separately.
4. Provide the smallest safe correction.
5. Provide verification.
6. Wait for the result.

---

## Git Ownership

The repository owner controls:

- git init
- git status
- git add
- git commit
- git push
- branch creation
- remote configuration

Provide exact commands.

Never invent a branch name.

Never claim a commit or push occurred without successful output.

Git should serve as a reliable engineering timeline.

Meaningful phases should have logical documentation checkpoints.

---

## Evidence Classification

Every important engineering claim must use an appropriate evidence classification:

- CURRENT
- IMPLEMENTED
- PARTIALLY IMPLEMENTED
- SKELETON
- STUB
- TARGET
- PLANNED
- PROPOSED
- ASSUMED
- UNKNOWN
- REQUIRES VERIFICATION

Never transform:

TARGET -> CURRENT

PLANNED -> IMPLEMENTED

PROPOSED -> DECIDED

ASSUMED -> VERIFIED

Commit messages, README descriptions, filenames, and intended architecture are not sufficient evidence of implementation.

---

## Anti-Hallucination Standard

Never invent:

- performance
- latency
- throughput
- concurrency
- infrastructure
- cloud resources
- Kubernetes behavior
- security guarantees
- isolation guarantees
- benchmark results
- test results
- failure recovery
- deployment results
- production usage
- cost
- uptime

If a metric has not been measured:

NOT MEASURED

If functionality does not exist:

NOT IMPLEMENTED

If something is only a proposal:

PROPOSED

---

## Product Boundary

ForgeRun owns infrastructure required to create and operate isolated development/execution environments.

Potential ForgeRun responsibilities include:

- workspace lifecycle
- compute allocation
- container/sandbox lifecycle
- filesystem
- terminal
- process execution
- networking
- resource limits
- persistence
- ephemeral environments
- workspace recovery
- workspace connectivity
- deployment primitives where appropriate
- programmatic execution APIs
- isolation/security boundaries
- infrastructure observability

ForgeRun does NOT own:

- agent reasoning
- agent memory
- agent planning
- agent prompting
- agent context management
- agent model selection
- agent tool policy
- agent evaluation logic
- workflow/business orchestration

---

## Architectural Independence

ForgeRun must remain usable without AI.

Human path:

Browser
-> ForgeRun
-> Workspace
-> Terminal / Files / Processes

AI path:

AgentOS
-> ForgeRun API
-> Workspace
-> Terminal / Files / Processes

Evaluation path:

EvalOS
-> ForgeRun API
-> Ephemeral evaluation workspace

ForgeRun must therefore expose stable infrastructure-level interfaces rather than interfaces tightly coupled to a specific AI framework.

---

## Boundary With Other Systems

Conceptual architecture:

WoE
  Workflow / Product
       |
       v
AgentOS
  Agent orchestration
       |
       v
ForgeRun
  Execution / Workspace
       |
       +-- Compute
       +-- Storage
       +-- Network
       |
       v
Containers / Kubernetes

EvalOS consumes ForgeRun infrastructure for evaluation environments.

Do not make ForgeRun depend directly on AgentOS.

Do not put AgentOS logic inside ForgeRun.

Do not put EvalOS logic inside ForgeRun.

Do not turn ForgeRun into WoE.

These integrations are conceptual unless explicitly implemented and verified.

---

## Current Repository Baseline

The original repository was cloned from:

https://github.com/rehan-khan-007/cloud-native-code-execution-platform

The preserved original baseline is identified by Git tag:

forgerun-phase0-original-baseline

The baseline commit is the commit recorded by that tag.

Do not destroy or rewrite the original history without explicit approval.

The original repository should be treated as historical/existing state until independently evaluated.

---

## Known Existing Repository Evidence

The repository currently contains a monorepo structure including:

- apps
- services
- packages
- infra
- benchmarks
- docs
- scripts
- tests

Existing implementation evidence includes:

- Workspace API route
- Orchestrator class
- Runner PTY abstraction
- Runner WebSocket server
- Shared workspace and terminal types
- Kubernetes workspace pod template

Important known implementation classifications from Phase 0 inspection:

### Workspace API

POST /workspaces exists as a route and invokes the orchestrator.

Classification:

PARTIALLY IMPLEMENTED

GET /workspaces/:id currently returns null through the orchestrator.

Classification:

STUB

DELETE /workspaces/:id invokes an empty delete operation.

Classification:

STUB

### Orchestrator

provisionWorkspace currently constructs and returns a Workspace object.

It does not establish evidence of actual workspace provisioning.

Classification:

SKELETON

getWorkspace returns null.

Classification:

STUB

deleteWorkspace has no implementation.

Classification:

STUB

### Runner PTY

The PTY class does not establish evidence of a real operating-system PTY.

spawn() generates a random PID.

write() produces an echo response.

Classification:

SKELETON

### Runner WebSocket

A WebSocket server exists and creates a PTY abstraction for connections.

Input and resize messages are handled.

The underlying PTY is currently a skeleton.

Classification:

PARTIALLY IMPLEMENTED

### Kubernetes

A workspace pod template exists.

Its existence does NOT establish that Kubernetes provisioning currently works.

Classification:

REQUIRES VERIFICATION / CONFIGURATION ARTIFACT

### Tests

The inspected test directories contained .gitkeep placeholders.

No meaningful test implementation was established during Phase 0 inspection.

Classification:

NOT IMPLEMENTED / REQUIRES FURTHER VERIFICATION

---

## Engineering Technology Rule

Do not add technologies merely because they sound impressive.

For every major infrastructure technology proposed, establish:

- problem solved
- reason it is needed
- alternatives
- operational complexity
- security implications
- failure implications
- scaling implications
- cost implications
- whether it is required now or later

Potential technologies may include:

- Docker
- Kubernetes
- Redis
- S3
- NFS
- Postgres
- Temporal
- Firecracker
- Nix
- OpenTelemetry
- Prometheus
- Grafana
- queues
- object storage
- persistent volumes

None are automatically approved.

---

## Phase Execution Rule

Only execute the explicitly authorized phase.

Never automatically begin the next phase.

Each phase follows:

PLAN
  ->
EXACT FILES
  ->
EXACT COMMANDS
  ->
LOCAL EXECUTION
  ->
OUTPUT / ERROR
  ->
DIAGNOSIS
  ->
VERIFICATION
  ->
GIT CHECKPOINT
  ->
STOP

---

## File Creation Protocol

Whenever creating a file, provide:

FILE:
<exact path>

CONTENT:
<complete content>

COMMAND:
<exact command>

VERIFICATION:
<exact verification command>

Do not require reconstruction of documents from scattered prose.

---

## Git Checkpoint Protocol

At a completed phase, provide:

git status --short

git add <exact files>

git commit -m "<exact message>"

git push origin <actual branch>

Never invent a branch name.

Never claim push success without evidence.

---

## Handoff Documentation

The handoff package lives in:

CLOUD_PLATFORM_HANDOFF/

The intended documentation package is:

00_MASTER_INSTRUCTION.md
01_CURRENT_REPOSITORY.md
02_PRODUCT_AND_SYSTEM_SPEC.md
03_TARGET_ARCHITECTURE.md
04_ARCHITECTURAL_DECISIONS.md
05_OPEN_QUESTIONS.md
06_ENGINEERING_RULES.md
07_SECURITY_AND_THREAT_MODEL.md
08_DATA_AND_STATE_MODEL.md
09_API_AND_SERVICE_CONTRACTS.md
10_FAILURE_AND_RECOVERY.md
11_TESTING_AND_VALIDATION.md
12_PERFORMANCE_AND_SCALING.md
13_OBSERVABILITY_AND_OPERATIONS.md
14_ACCEPTANCE_CRITERIA.md
15_IMPLEMENTATION_ROADMAP.md
16_CURRENT_IMPLEMENTATION_STATUS.md
17_RISK_REGISTER.md
18_TECHNICAL_DEBT.md
19_MODEL_ENGINEERING_GUIDE.md
20_SESSION_HANDOFF.md
21_FINAL_CTO_REVIEW.md

Do not create future documents prematurely unless the corresponding phase explicitly requires them.

---

## 22-Phase Program

PHASE 0
Reset / repository initialization / handoff protocol

PART I — PROJECT + ARCHITECTURE

PHASE 1
Repository and current-state reconstruction

PHASE 2
Product and system requirements

PHASE 3
Target system architecture

PHASE 4
Detailed component and service design

PHASE 5
Data / state / storage model

PHASE 6
API and service contracts

PHASE 7
Architectural decisions and engineering constraints

PHASE 8
Architecture consistency review

PART II — PRODUCTION ENGINEERING

PHASE 9
Security and threat model

PHASE 10
Isolation / sandbox / execution model

PHASE 11
Failure / recovery / durability

PHASE 12
Testing and validation

PHASE 13
Performance / scaling / capacity

PHASE 14
Observability / operations

PHASE 15
Engineering standards / quality gates

PART III — CONTINUITY

PHASE 16
Acceptance criteria

PHASE 17
Implementation roadmap

PHASE 18
Current implementation state

PHASE 19
Risk register / technical debt

PHASE 20
Open questions

PHASE 21
Session / model handoff + final CTO review

The documentation structure may evolve if necessary, but changes must be explicitly documented.

---

## Phase 0 Scope

Phase 0 is initialization only.

Phase 0 may:

- inspect the existing repository state at a high level
- establish the Git baseline
- ensure the existing project state is recoverable
- establish the clean-start strategy
- establish ForgeRun product identity
- establish boundaries with AgentOS, EvalOS, and WoE
- establish the handoff directory
- establish the master handoff instruction
- establish the 22-phase roadmap
- establish Git checkpoint discipline
- establish model/session portability

Phase 0 must NOT:

- implement Kubernetes
- implement Docker infrastructure
- implement Redis
- implement S3
- implement APIs
- implement runners
- implement terminals
- implement agent functionality
- implement EvalOS functionality
- implement WoE functionality
- redesign the complete architecture
- benchmark the platform
- claim production readiness
- begin Phase 1

---

## Model / Session Portability

A future human or model joining the repository cold must be able to determine:

- Where are we?
- What exists?
- What does not exist?
- Why was it designed this way?
- What decisions are locked?
- What remains open?
- What failed?
- What has been verified?
- What is the exact next action?

Never assume knowledge from a previous session that is not represented in the repository handoff.

---

## Governing Principle

The objective is not to make ForgeRun look sophisticated.

The objective is to build a technically defensible cloud infrastructure platform whose architecture, implementation, measurements, security model, and engineering claims can all be independently verified.

Every future engineering decision should preserve that standard.
