import { EventEmitter } from "events";
export interface PTYOptions {
    shell: string;
    cwd?: string;
    env?: Record<string, string>;
    cols?: number;
    rows?: number;
}
export declare class PTY extends EventEmitter {
    private options;
    private process;
    pid: number | null;
    constructor(options: PTYOptions);
    spawn(): Promise<void>;
    write(data: string): void;
    resize(cols: number, rows: number): void;
    kill(): void;
}
