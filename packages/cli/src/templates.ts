// slik — packages/cli/src/templates.ts

export interface TemplateConfig {
  stack: string
  vibe: string
  path: string
}

export const DEFAULT_BRANCH = "main"
export const REPO_OWNER = "FaizyabHussain07"
export const REPO_NAME = "slik-engine"

export const STACKS = {
  NEXT_JS: "next-js",
  REACT_JS: "react-js",
  HTML: "html",
} as const

export const VIBES = {
  BENTO_SB: "bento-sb",
  FROST_SB: "frost-sb",
  MONO_SB: "mono-sb",
} as const

export const TEMPLATE_REGISTRY: Record<string, TemplateConfig> = {
  "next-js-bento-sb": {
    stack: STACKS.NEXT_JS,
    vibe: VIBES.BENTO_SB,
    path: `${REPO_OWNER}/${REPO_NAME}/templates/${STACKS.NEXT_JS}/${VIBES.BENTO_SB}`,
  },
  "next-js-frost-sb": {
    stack: STACKS.NEXT_JS,
    vibe: VIBES.FROST_SB,
    path: `${REPO_OWNER}/${REPO_NAME}/templates/${STACKS.NEXT_JS}/${VIBES.FROST_SB}`,
  },
  "next-js-mono-sb": {
    stack: STACKS.NEXT_JS,
    vibe: VIBES.MONO_SB,
    path: `${REPO_OWNER}/${REPO_NAME}/templates/${STACKS.NEXT_JS}/${VIBES.MONO_SB}`,
  },
  "react-js-bento-sb": {
    stack: STACKS.REACT_JS,
    vibe: VIBES.BENTO_SB,
    path: `${REPO_OWNER}/${REPO_NAME}/templates/${STACKS.REACT_JS}/${VIBES.BENTO_SB}`,
  },
  "react-js-frost-sb": {
    stack: STACKS.REACT_JS,
    vibe: VIBES.FROST_SB,
    path: `${REPO_OWNER}/${REPO_NAME}/templates/${STACKS.REACT_JS}/${VIBES.FROST_SB}`,
  },
  "react-js-mono-sb": {
    stack: STACKS.REACT_JS,
    vibe: VIBES.MONO_SB,
    path: `${REPO_OWNER}/${REPO_NAME}/templates/${STACKS.REACT_JS}/${VIBES.MONO_SB}`,
  },
  "html-bento-sb": {
    stack: STACKS.HTML,
    vibe: VIBES.BENTO_SB,
    path: `${REPO_OWNER}/${REPO_NAME}/templates/${STACKS.HTML}/${VIBES.BENTO_SB}`,
  },
  "html-frost-sb": {
    stack: STACKS.HTML,
    vibe: VIBES.FROST_SB,
    path: `${REPO_OWNER}/${REPO_NAME}/templates/${STACKS.HTML}/${VIBES.FROST_SB}`,
  },
  "html-mono-sb": {
    stack: STACKS.HTML,
    vibe: VIBES.MONO_SB,
    path: `${REPO_OWNER}/${REPO_NAME}/templates/${STACKS.HTML}/${VIBES.MONO_SB}`,
  },
}

export function getTemplateKey(stack: string, vibe: string): string {
  return `${stack}-${vibe}`
}

export function getTemplate(stack: string, vibe: string): TemplateConfig | null {
  const key = getTemplateKey(stack, vibe)
  return TEMPLATE_REGISTRY[key] || null
}

export function isValidTemplate(stack: string, vibe: string): boolean {
  return getTemplate(stack, vibe) !== null
}

export function getDegitPath(stack: string, vibe: string, branch: string = DEFAULT_BRANCH): string {
  const template = getTemplate(stack, vibe)
  if (!template) {
    throw new Error(`Invalid template combination: ${stack}/${vibe}`)
  }
  return `${template.path}#${branch}`
}
