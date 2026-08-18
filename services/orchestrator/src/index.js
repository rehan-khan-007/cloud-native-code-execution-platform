"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orchestrator = void 0;
class Orchestrator {
    async provisionWorkspace(userId, runtime) {
        return {
            id: this.generateId(),
            userId,
            status: "provisioning",
            runtime,
            createdAt: new Date().toISOString(),
        };
    }
    async getWorkspace(id) {
        return null;
    }
    async deleteWorkspace(id) { }
    generateId() {
        return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    }
}
exports.Orchestrator = Orchestrator;
//# sourceMappingURL=index.js.map