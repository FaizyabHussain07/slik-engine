import {
  intro,
  text,
  select,
  spinner,
  outro,
  isCancel,
  cancel,
  note,
} from "@clack/prompts"
import { cloneTemplate } from "./clone.js"
import { setupProject } from "./setup.js"
import pc from "picocolors"

async function main() {
  console.log("")

  intro(pc.bgWhite(pc.black(" ✦ slik ")) + " " + pc.dim("design at the speed of thought"))

  // Project name
  const projectName = await text({
    message: "Project name?",
    placeholder: "my-app",
    validate: (v) => {
      if (!v || v.trim() === "") return "Project name is required"
      if (!/^[a-z0-9-_]+$/.test(v))
        return "Use lowercase letters, numbers, hyphens only"
    },
  })
  if (isCancel(projectName)) {
    cancel(pc.red("Cancelled."))
    process.exit(0)
  }

  // Stack
  const stack = await select({
    message: "Pick a stack?",
    options: [
      {
        value: "next-js",
        label: "Next.js 15",
        hint: "SSR · App Router · Recommended",
      },
      {
        value: "react-js",
        label: "React (Vite)",
        hint: "SPA · Client-side only",
      },
      {
        value: "html",
        label: "Vanilla HTML",
        hint: "Zero framework · Ultra-light",
      },
    ],
  })
  if (isCancel(stack)) {
    cancel(pc.red("Cancelled."))
    process.exit(0)
  }

  // Vibe
  const vibe = await select({
    message: "Pick a vibe?",
    options: [
      {
        value: "bento-sb",
        label: "Bento",
        hint: "Grid-based · Dark · Editorial",
      },
      {
        value: "frost-sb",
        label: "Frost",
        hint: "Glassmorphism · Light + blur",
      },
      {
        value: "mono-sb",
        label: "Mono",
        hint: "Minimal · Monochrome",
      },
    ],
  })
  if (isCancel(vibe)) {
    cancel(pc.red("Cancelled."))
    process.exit(0)
  }

  // Summary note before cloning
  note(
    `${pc.white(projectName as string)}\n` +
    `${pc.dim("Stack  ")} ${pc.cyan(stack as string)}\n` +
    `${pc.dim("Vibe   ")} ${pc.cyan(vibe as string)}`,
    "Creating your project"
  )

  const repoPath = `FaizyabHussain07/slik-engine/templates/${stack}/${vibe}`

  const s = spinner()

  // Clone
  s.start("Cloning template...")
  try {
    await cloneTemplate(repoPath, projectName as string)
    s.stop(pc.green("Template cloned ✓"))
  } catch (err) {
    s.stop(pc.red("Clone failed ✗"))
    console.error(pc.red("\nError:"), err)
    process.exit(1)
  }

  // Setup
  s.start("Installing dependencies...")
  try {
    await setupProject(projectName as string)
    s.stop(pc.green("Dependencies installed ✓"))
  } catch (err) {
    s.stop(pc.red("Setup failed ✗"))
    console.error(pc.red("\nError:"), err)
    process.exit(1)
  }

  // Final message
  outro(
    pc.green("✦ Your Slik project is ready!\n\n") +
    `  ${pc.dim("Next steps:")}\n\n` +
    `  ${pc.cyan("❶")}  cd ${pc.white(projectName as string)}\n` +
    `  ${pc.cyan("❷")}  Fill ${pc.white(".env.local")} with your Supabase credentials\n` +
    `  ${pc.cyan("❸")}  ${pc.white("npm run dev")}\n\n` +
    `  ${pc.dim("Docs    →")} ${pc.underline("https://slik.dev/docs")}\n` +
    `  ${pc.dim("Issues  →")} ${pc.underline("https://github.com/FaizyabHussain07/slik-engine/issues")}`
  )
}

main()