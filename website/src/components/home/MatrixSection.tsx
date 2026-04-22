import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MatrixSection() {
  const [selected, setSelected] = useState<string | null>('next-bento')

  const vibes = ['Bento', 'Frost', 'Mono']
  const stacks = ['Next.js', 'React', 'HTML']

  const isAvailable = (stack: string, vibe: string) => {
    return stack === 'Next.js' && vibe === 'Bento'
  }

  const handleCellClick = (stack: string, vibe: string) => {
    if (isAvailable(stack, vibe)) {
      setSelected(`${stack.toLowerCase()}-${vibe.toLowerCase()}`)
    }
  }

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-widest mb-4">
          ✦ Stack Matrix
        </p>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)]">
          Choose your stack & vibe
        </h2>
      </motion.div>

      <div className="max-w-[800px] mx-auto mt-12">
        {/* Column headers */}
        <div className="flex justify-center mb-4 ml-16">
          {stacks.map((stack) => (
            <div key={stack} className="flex-1 text-center">
              <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest">
                {stack}
              </span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="space-y-3">
          {vibes.map((vibe) => (
            <div key={vibe} className="flex items-center gap-3">
              {/* Row label */}
              <div className="w-16 text-right">
                <span className="font-mono text-xs text-[var(--muted)]">{vibe}</span>
              </div>
              
              {/* Cells */}
              {stacks.map((stack) => {
                const available = isAvailable(stack, vibe)
                const cellId = `${stack.toLowerCase()}-${vibe.toLowerCase()}`
                const isSelected = selected === cellId

                return (
                  <div
                    key={stack}
                    onClick={() => handleCellClick(stack, vibe)}
                    className={`
                      flex-1 aspect-square rounded-[16px] border cursor-pointer
                      flex flex-col items-center justify-center p-4
                      transition-all duration-200
                      ${available 
                        ? `bg-[var(--surface)] border-[var(--border2)] hover:border-[var(--accent)] hover:scale-[1.02]`
                        : `bg-[var(--surface)] border-[var(--border)] opacity-40 cursor-not-allowed`
                      }
                      ${isSelected ? 'border-[var(--accent)] shadow-[0_0_30px_rgba(200,241,53,0.2)]' : ''}
                    `}
                  >
                    {available ? (
                      <>
                        <span className="font-serif text-lg text-[var(--text)]">{vibe}</span>
                        <span className="font-mono text-[10px] text-[var(--muted)] mt-1">{stack}</span>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)]" />
                          <span className="text-[10px] text-[var(--teal)]">Available</span>
                        </div>
                      </>
                    ) : (
                      <span className="font-mono text-xs text-[var(--muted)]">Soon</span>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <p className="text-sm text-[var(--muted)] text-center mt-6">
          More stacks and vibes coming soon.{' '}
          <a
            href="https://github.com/FaizyabHussain07/slik-engine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            Star the repo to get notified →
          </a>
        </p>
      </div>
    </section>
  )
}
