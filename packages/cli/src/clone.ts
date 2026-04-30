// slik — packages/cli/src/clone.ts

import degit from "degit"
import { existsSync, rmSync } from "fs"
import { join } from "path"

export interface CloneError extends Error {
  code?: string
}

export class CloneTemplateError extends Error implements CloneError {
  code: string
  constructor(message: string, code: string = "CLONE_FAILED") {
    super(message)
    this.name = "CloneTemplateError"
    this.code = code
  }
}

export async function cloneTemplate(
  repoPath: string,
  projectName: string,
  options: { force?: boolean } = {}
): Promise<void> {
  const { force = false } = options
  const targetDir = join(process.cwd(), projectName)

  // Check if directory already exists
  if (existsSync(targetDir)) {
    if (!force) {
      throw new CloneTemplateError(
        `Directory "${projectName}" already exists. Use a different name or remove the existing directory.`,
        "DIR_EXISTS"
      )
    }
    // Force remove existing directory
    rmSync(targetDir, { recursive: true, force: true })
  }

  // Try tar mode first (uses GitHub API, no auth required)
  try {
    await cloneWithDegit(repoPath, projectName, { mode: "tar" })
  } catch (error) {
    console.error(`Tar mode failed: ${error instanceof Error ? error.message : String(error)}`)
    // Fallback to git mode if tar fails
    try {
      await cloneWithDegit(repoPath, projectName, { mode: "git" })
    } catch (fallbackError) {
      console.error(`Git mode failed: ${fallbackError instanceof Error ? fallbackError.message : String(fallbackError)}`)
      throw new CloneTemplateError(
        `Failed to clone template from ${repoPath}. Please check your internet connection and try again.`,
        "CLONE_FAILED"
      )
    }
  }
}

async function cloneWithDegit(
  repoPath: string,
  projectName: string,
  options: { mode: "tar" | "git" }
): Promise<void> {
  const emitter = degit(repoPath, {
    cache: false,
    force: true,
    verbose: true,
    mode: options.mode,
  })

  await emitter.clone(projectName)
}
