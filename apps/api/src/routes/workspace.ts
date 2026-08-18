import { Router, Request, Response } from "express";
import { Orchestrator } from "../../../../services/orchestrator/src/index";

const router = Router();
const orchestrator = new Orchestrator();

router.post("/workspaces", async (req: Request, res: Response) => {
  const { userId, runtime } = req.body;
  const workspace = await orchestrator.provisionWorkspace(userId, runtime || "node");
  res.status(201).json(workspace);
});

router.get("/workspaces/:id", async (req: Request, res: Response) => {
  const workspace = await orchestrator.getWorkspace(req.params.id);
  if (!workspace) return res.status(404).json({ error: "not found" });
  res.json(workspace);
});

router.delete("/workspaces/:id", async (req: Request, res: Response) => {
  await orchestrator.deleteWorkspace(req.params.id);
  res.status(204).send();
});

export default router;