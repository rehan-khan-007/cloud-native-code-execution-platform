import { Router, Request, Response } from "express";
import { Orchestrator } from "../../../../services/orchestrator/src/index";
import type { Workspace } from "../../../../packages/shared/src/index";

const router = Router();
const orchestrator = new Orchestrator();

router.post("/workspaces", async (req: Request, res: Response) => {
  const { userId, runtime } = req.body as { userId: string; runtime?: string };
  const rt: Workspace["runtime"] = (runtime as Workspace["runtime"]) || "node";
  const workspace = await orchestrator.provisionWorkspace(userId, rt);
  res.status(201).json(workspace);
});

router.get("/workspaces/:id", async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const workspace = await orchestrator.getWorkspace(id);
  if (!workspace) { res.status(404).json({ error: "not found" }); return; }
  res.json(workspace);
});

router.delete("/workspaces/:id", async (req: Request, res: Response) => {
  const id = req.params.id as string;
  await orchestrator.deleteWorkspace(id);
  res.status(204).send();
});

export default router;