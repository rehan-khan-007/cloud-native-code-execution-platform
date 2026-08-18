export type WorkspaceStatus = "provisioning" | "running" | "stopped" | "failed";

export interface Workspace {
  id: string;
  userId: string;
  status: WorkspaceStatus;
  runtime: "python" | "node" | "cpp";
  createdAt: string;
}

export interface TerminalMessage {
  type: "input" | "output" | "resize" | "heartbeat";
  data: string;
  cols?: number;
  rows?: number;
}

export interface BenchmarkResult {
  metric: string;
  value: number;
  unit: string;
  p95?: number;
  p99?: number;
}