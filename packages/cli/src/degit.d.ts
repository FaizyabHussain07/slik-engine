declare module "degit" {
  interface DegitOptions {
    cache?: boolean;
    force?: boolean;
    verbose?: boolean;
    mode?: "default" | "git";
  }

  interface DegitEmitter {
    clone(dest: string): Promise<void>;
    on(event: string, callback: (...args: any[]) => void): this;
  }

  function degit(src: string, options?: DegitOptions): DegitEmitter;

  export default degit;
}
