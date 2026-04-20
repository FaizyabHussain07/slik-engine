// slik — packages/cli/src/setup.ts

import { execa } from "execa"
import { existsSync, copyFileSync } from "fs"
import { join } from "path"

export async function setupProject(projectName: string): Promise<void> {
  const cwd = join(process.cwd(), projectName)

  // Install dependencies
  await execa("npm", ["install"], { cwd, stdio: "pipe" })

  // Git init
  try {
    await execa("git", ["init"], { cwd, stdio: "pipe" })
    await execa("git", ["add", "."], { cwd, stdio: "pipe" })
    await execa("git", ["commit", "-m", "chore: initial commit from Slik"], {
      cwd,
      stdio: "pipe",
    })
  } catch {
    // git might not be available — skip silently
  }

  // Copy .env.example to .env.local
  const envExample = join(cwd, ".env.example")
  const envLocal = join(cwd, ".env.local")
  if (existsSync(envExample) && !existsSync(envLocal)) {
    copyFileSync(envExample, envLocal)
  }
}
