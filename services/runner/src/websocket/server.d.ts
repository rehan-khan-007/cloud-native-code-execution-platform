export declare class TerminalServer {
    private port;
    private connections;
    constructor(port?: number);
    start(): void;
    private extractWorkspaceId;
}
