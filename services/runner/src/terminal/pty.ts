type PTYEventHandler = (event: string, data: any) => void;

export interface PTYOptions {
  shell: string;
  cwd?: string;
  env?: Record<string, string>;
  cols?: number;
  rows?: number;
}

export class PTY {
  private handler: PTYEventHandler | null = null;
  public pid: number | null = null;

  constructor(private options: PTYOptions) {}

  on(handler: PTYEventHandler): void {
    this.handler = handler;
  }

  async spawn(): Promise<void> {
    this.pid = Math.floor(Math.random() * 10000);
    if (this.handler) this.handler("spawn", { pid: this.pid });
  }

  write(data: string): void {
    if (this.handler) this.handler("output", `[echo] ${data.trim()}`);
  }

  resize(cols: number, rows: number): void {
    this.options.cols = cols;
    this.options.rows = rows;
  }

  kill(): void {
    if (this.pid) {
      this.pid = null;
      if (this.handler) this.handler("exit", { code: 0 });
    }
  }
}