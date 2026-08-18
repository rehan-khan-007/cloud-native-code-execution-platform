import { Workspace } from "../../../packages/shared/src/index";

export class Orchestrator {
  async provisionWorkspace(
    userId: string,
    runtime: Workspace["runtime"]
  ): Promise<Workspace> {
    return {
      id: this.generateId(),
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

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
}