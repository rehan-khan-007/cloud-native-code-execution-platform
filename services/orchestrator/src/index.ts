import { Workspace } from "../../../../packages/shared/src";

export class Orchestrator {
  async provisionWorkspace(userId: string, runtime: Workspace["runtime"]): Promise<Workspace> {
    return {
      id: crypto.randomUUID(),
      userId,
      status: "provisioning",
      runtime,
      createdAt: new Date().toISOString(),
    };
  }

  async getWorkspace(id: string): Promise<Workspace | null> {
    return null;
  }

  async deleteWorkspace(id: string): Promise<void> {}
}
