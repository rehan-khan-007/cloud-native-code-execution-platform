import { WebSocketServer, WebSocket } from "ws";
import { IncomingMessage } from "http";
import { PTY } from "../terminal/pty";

interface WSConnection {
  ws: WebSocket;
  pty: PTY;
  workspaceId: string;
}

export class TerminalServer {
  private connections: Map<string, WSConnection> = new Map();

  constructor(private port: number = 8080) {}

  start(): void {
    const wss = new WebSocketServer({ port: this.port });
    wss.on("connection", (ws: WebSocket, req: IncomingMessage) => {
      const workspaceId = this.extractWorkspaceId(req.url || "");
      const pty = new PTY({ shell: "/bin/bash", cols: 80, rows: 24 });

      pty.on((event, data) => {
        if (event === "output" && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "output", data }));
        }
      });

      pty.spawn();

      const conn: WSConnection = { ws, pty, workspaceId };
      this.connections.set(workspaceId, conn);

      ws.on("message", (raw: Buffer) => {
        try {
          const msg = JSON.parse(raw.toString());
          if (msg.type === "input") pty.write(msg.data);
          if (msg.type === "resize") pty.resize(msg.cols, msg.rows);
        } catch {
          /* ignore malformed */
        }
      });

      ws.on("close", () => {
        pty.kill();
        this.connections.delete(workspaceId);
      });

      ws.send(JSON.stringify({ type: "connected", workspaceId }));
    });
  }

  private extractWorkspaceId(url: string): string {
    const u = new URL(url, "http://localhost");
    return u.searchParams.get("workspaceId") || "unknown";
  }
}