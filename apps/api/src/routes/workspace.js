"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../../../../services/orchestrator/src/index");
const router = (0, express_1.Router)();
const orchestrator = new index_1.Orchestrator();
router.post("/workspaces", async (req, res) => {
    const { userId, runtime } = req.body;
    const workspace = await orchestrator.provisionWorkspace(userId, runtime || "node");
    res.status(201).json(workspace);
});
router.get("/workspaces/:id", async (req, res) => {
    const workspace = await orchestrator.getWorkspace(req.params.id);
    if (!workspace)
        return res.status(404).json({ error: "not found" });
    res.json(workspace);
});
router.delete("/workspaces/:id", async (req, res) => {
    await orchestrator.deleteWorkspace(req.params.id);
    res.status(204).send();
});
exports.default = router;
//# sourceMappingURL=workspace.js.map