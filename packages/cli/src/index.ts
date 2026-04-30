#!/usr/bin/env node
// slik — packages/cli/src/index.ts

import { intro, text, select, spinner, outro, isCancel, cancel, note } from "@clack/prompts"
import { cloneTemplate, CloneTemplateError } from "./clone.js"
import { setupProject } from "./setup.js"
import {
  getDegitPath,
  isValidTemplate,
  STACKS,
  VIBES,
  DEFAULT_BRANCH,
} from "./templates.js"
import pc from "picocolors"

async function main() {
  console.log("")
  intro(pc.cyan(pc.bold("✦ slik")) + pc.dim(" — design at the speed of thought"))

  // Project name
  const projectName = await text({
    message: pc.dim("Project name?"),
    placeholder: "my-app",
    validate: (v) => {
      if (!v || v.trim() === "") return "Project name is required"
      if (!/^[a-z0-9-_]+$/.test(v)) return "Use lowercase letters, numbers, hyphens only"
    },
  })
  if (isCancel(projectName)) {
    cancel("Cancelled.")
    process.exit(0)
  }

  // Stack
  const stack = await select({
    message: pc.dim("Select stack?"),
    options: [
      { value: STACKS.REACT_JS, label: pc.green("⚡ React (Vite)"), hint: "SPA · Client-side · Fast" }
    ],
  })
  if (isCancel(stack)) {
    cancel("Cancelled.")
    process.exit(0)
  }

  // Vibe
  const vibe = await select({
    message: pc.dim("Select design vibe?"),
    options: [
      { value: VIBES.BENTO_SB, label: pc.yellow("🍱 Bento"), hint: "Grid-based · Dark · Editorial" },
      { value: VIBES.FROST_SB, label: pc.blue("❄️  Frost"), hint: "Glassmorphism · Light + blur" }
    ],
  })
  if (isCancel(vibe)) {
    cancel("Cancelled.")
    process.exit(0)
  }

  // Validate template combination
  if (!isValidTemplate(stack as string, vibe as string)) {
    cancel(`Invalid template combination: ${stack}/${vibe}`)
    process.exit(1)
  }

  // Build GitHub path with branch specifier
  const repoPath = getDegitPath(stack as string, vibe as string, DEFAULT_BRANCH)

  const s = spinner()

  // Clone
  s.start(pc.dim("Cloning template from GitHub..."))
  try {
    await cloneTemplate(repoPath, projectName as string)
    s.stop(pc.green("✓ Template cloned successfully"))
  } catch (err) {
    s.stop(pc.red("✗ Clone failed"))
    if (err instanceof CloneTemplateError) {
      console.error(pc.red(`\n  ${err.message}`))
    } else {
      console.error(pc.red("\n  An unexpected error occurred while cloning the template."))
    }
    process.exit(1)
  }

  // Setup
  s.start(pc.dim("Installing dependencies..."))
  try {
    await setupProject(projectName as string)
    s.stop(pc.green("✓ Dependencies installed"))
  } catch (err) {
    s.stop(pc.red("✗ Setup failed"))
    console.error(pc.red("\n  An unexpected error occurred during setup."))
    console.error(pc.dim(`\n  Try running: cd ${projectName} && npm install`))
    process.exit(1)
  }

  const stackLabel = stack === STACKS.REACT_JS ? "React + Vite" : "React + Vite"
  const vibeLabel = vibe === VIBES.BENTO_SB ? "Bento" : "Frost"
  
  note(
    pc.green(pc.bold(`✦ Project "${projectName}" created!\n`)) +
    pc.dim(`  Stack: `) + pc.white(stackLabel) + pc.dim(`  |  Vibe: `) + pc.white(vibeLabel) + "\n\n" +
    pc.cyan(pc.bold("Next steps:\n")) +
    pc.white(`  cd ${projectName}\n`) +
    pc.white(`  ${vibe === VIBES.BENTO_SB ? "cp .env.example .env.local" : "npm run dev"}\n`) +
    (vibe === VIBES.BENTO_SB ? pc.dim("  (Add your Supabase credentials to .env.local)\n") : "") +
    "\n" +
    pc.dim("Documentation: ") + pc.cyan("https://slik-dev.vercel.app/docs")
  )
}

main()