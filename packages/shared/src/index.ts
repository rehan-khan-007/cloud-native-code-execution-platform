export interface Workspace {
  id: string;
  userId: string;
  status: "provisioning" | "running" | "stopped" | "failed";
  runtime: "python" | "node" | "cpp";
  createdAt: string;
}

export interface TerminalMessage {
  type: "input" | "output" | "resize" | "heartbeat";
  data: string;
  cols?: number;
  rows?: number;
}