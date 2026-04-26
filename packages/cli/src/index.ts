#!/usr/bin/env node
// slik — packages/cli/src/index.ts

import { intro, text, select, spinner, outro, isCancel, cancel } from "@clack/prompts"
import { cloneTemplate, CloneTemplateError } from "./clone.js"
import { setupProject } from "./setup.js"
import {
  getDegitPath,
  isValidTemplate,
  STACKS,
  VIBES,
  DEFAULT_BRANCH,
} from "./templates.js"

async function main() {
  console.log("")
  intro("✦ slik — design at the speed of thought")

  // Project name
  const projectName = await text({
    message: "Project name?",
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
    message: "Stack?",
    options: [
      { value: STACKS.NEXT_JS, label: "Next.js 15", hint: "SSR · App Router · Recommended" },
      { value: STACKS.REACT_JS, label: "React (Vite)", hint: "SPA · Client-side only" },
      { value: STACKS.HTML, label: "Vanilla HTML", hint: "Zero framework · Ultra-light" },
    ],
  })
  if (isCancel(stack)) {
    cancel("Cancelled.")
    process.exit(0)
  }

  // Vibe
  const vibe = await select({
    message: "Vibe?",
    options: [
      { value: VIBES.BENTO_SB, label: "Bento", hint: "Grid-based · Dark · Editorial" },
      { value: VIBES.FROST_SB, label: "Frost", hint: "Glassmorphism · Light + blur" },
      { value: VIBES.MONO_SB, label: "Mono", hint: "Minimal · Monochrome" },
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
  s.start("Cloning template...")
  try {
    await cloneTemplate(repoPath, projectName as string)
    s.stop("Template ready ✓")
  } catch (err) {
    s.stop("Clone failed ✗")
    if (err instanceof CloneTemplateError) {
      console.error(`\n${err.message}`)
    } else {
      console.error("\nAn unexpected error occurred while cloning the template.")
    }
    process.exit(1)
  }

  // Setup
  s.start("Installing dependencies...")
  try {
    await setupProject(projectName as string)
    s.stop("Done ✓")
  } catch (err) {
    s.stop("Setup failed ✗")
    console.error("\nAn unexpected error occurred during setup.")
    process.exit(1)
  }

  outro(
    `✦ Your Slik project is ready!\n\n` +
    `  Next steps:\n` +
    `  cd ${projectName}\n` +
    `  Fill in .env.local with your Supabase credentials\n` +
    `  npm run dev\n\n` +
    `  Docs → https://slik-dev.vercel.app/docs`
  )
}

main()