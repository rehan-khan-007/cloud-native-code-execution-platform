import { Workspace } from "../../../packages/shared/src/index";
export declare class Orchestrator {
    provisionWorkspace(userId: string, runtime: Workspace["runtime"]): Promise<Workspace>;
    getWorkspace(id: string): Promise<Workspace | null>;
    deleteWorkspace(id: string): Promise<void>;
    private generateId;
}
