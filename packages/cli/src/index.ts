#!/usr/bin/env node
// slik — packages/cli/src/index.ts

import { intro, text, select, spinner, outro, isCancel, cancel } from "@clack/prompts"
import { cloneTemplate } from "./clone.js"
import { setupProject } from "./setup.js"

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
      { value: "next-js",   label: "Next.js 15",    hint: "SSR · App Router · Recommended" },
      { value: "react-js",  label: "React (Vite)",   hint: "SPA · Client-side only" },
      { value: "html",      label: "Vanilla HTML",   hint: "Zero framework · Ultra-light" },
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
      { value: "bento-sb", label: "Bento", hint: "Grid-based · Dark · Editorial" },
      { value: "frost-sb", label: "Frost", hint: "Glassmorphism · Light + blur" },
      { value: "mono-sb",  label: "Mono",  hint: "Minimal · Monochrome" },
    ],
  })
  if (isCancel(vibe)) {
    cancel("Cancelled.")
    process.exit(0)
  }

  // Build GitHub path
  const repoPath = `FaizyabHussain07/slik-engine/templates/${stack}/${vibe}` 

  const s = spinner()

  // Clone
  s.start("Cloning template...")
  try {
    await cloneTemplate(repoPath, projectName as string)
    s.stop("Template ready ✓")
  } catch (err) {
    s.stop("Clone failed ✗")
    console.error("\nError:", err)
    process.exit(1)
  }

  // Setup
  s.start("Installing dependencies...")
  try {
    await setupProject(projectName as string)
    s.stop("Done ✓")
  } catch (err) {
    s.stop("Setup failed ✗")
    console.error("\nError:", err)
    process.exit(1)
  }

  outro(
    `✦ Your Slik project is ready!\n\n` +
    `  Next steps:\n` +
    `  cd ${projectName}\n` +
    `  Fill in .env.local with your Supabase credentials\n` +
    `  npm run dev\n\n` +
    `  Docs → https://slik.dev/docs` 
  )
}

main()
