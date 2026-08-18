"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalServer = void 0;
const ws_1 = require("ws");
const pty_1 = require("../terminal/pty");
class TerminalServer {
    port;
    connections = new Map();
    constructor(port = 8080) {
        this.port = port;
    }
    start() {
        const wss = new ws_1.WebSocketServer({ port: this.port });
        wss.on("connection", (ws, req) => {
            const workspaceId = this.extractWorkspaceId(req.url || "");
            const pty = new pty_1.PTY({ shell: "/bin/bash", cols: 80, rows: 24 });
            pty.spawn();
            const conn = { ws, pty, workspaceId };
            this.connections.set(workspaceId, conn);
            pty.on("output", (data) => {
                if (ws.readyState === ws_1.WebSocket.OPEN) {
                    ws.send(JSON.stringify({ type: "output", data }));
                }
            });
            ws.on("message", (raw) => {
                const msg = JSON.parse(raw.toString());
                if (msg.type === "input")
                    pty.write(msg.data);
                if (msg.type === "resize")
                    pty.resize(msg.cols, msg.rows);
            });
            ws.on("close", () => {
                pty.kill();
                this.connections.delete(workspaceId);
            });
            ws.send(JSON.stringify({ type: "connected", workspaceId }));
        });
    }
    extractWorkspaceId(url) {
        return url.replace("/", "").split("?")[0] || "unknown";
    }
}
exports.TerminalServer = TerminalServer;
//# sourceMappingURL=server.js.map