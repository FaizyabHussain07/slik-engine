// slik — packages/cli/src/clone.ts

import degit from "degit"

export async function cloneTemplate(
  repoPath: string,
  projectName: string
): Promise<void> {
  const emitter = degit(repoPath, {
    cache: false,
    force: true,
    verbose: false,
  })
  await emitter.clone(projectName)
}
