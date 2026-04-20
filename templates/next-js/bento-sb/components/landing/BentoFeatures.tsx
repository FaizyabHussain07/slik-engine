// nexus — components/landing/BentoFeatures.tsx

export function BentoFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-3">
        {/* Cell A - Real-time collaboration */}
        <div className="col-span-12 md:col-span-7 min-h-[320px] bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--purple)]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--purple)' }}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl">Real-time collaboration</h2>
          </div>
          
          {/* Fake Kanban Board */}
          <div className="bg-[var(--surface2)] rounded-lg p-4 border border-[var(--border)]">
            <div className="flex gap-4">
              {['Todo', 'In Progress', 'Done'].map((column, i) => (
                <div key={column} className="flex-1">
                  <div className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-3">{column}</div>
                  <div className="space-y-2">
                    {[...Array(i === 0 ? 3 : 2)].map((_, j) => (
                      <div key={j} className="bg-[var(--surface)] border-l-2 rounded p-2 border-[var(--border)]" style={{ borderColor: ['var(--coral)', 'var(--accent)', 'var(--teal)'][j % 3] }}>
                        <div className="text-xs text-[var(--text)] mb-1">Task {j + 1}</div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[var(--purple)]/20 text-[var(--purple)] text-[8px] flex items-center justify-center">A</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-sm text-[var(--muted)] mt-4">
            See every change as it happens. No refreshing, no conflicts, no lost work.
          </p>
        </div>

        {/* Cell B - AI-powered insights */}
        <div className="col-span-12 md:col-span-5 min-h-[320px] bg-[var(--surface2)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--teal)]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--teal)' }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl">AI-powered insights</h2>
          </div>
          
          {/* Fake AI Chat */}
          <div className="bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)] space-y-3">
            <div className="flex justify-end">
              <div className="bg-[var(--surface2)] rounded-lg px-3 py-2 text-xs text-[var(--text)] max-w-[80%]">
                Summarize this sprint
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-[var(--accent)]/10 border-l-2 border-[var(--accent)] rounded-lg px-3 py-2 text-xs text-[var(--text)] max-w-[90%]">
                Your team completed 23 tasks this sprint with a 94% on-time rate. Top performers: Sarah (+8 tasks), Mike (+6 tasks). 3 items carried over to next sprint.
              </div>
            </div>
          </div>
          
          <p className="text-sm text-[var(--muted)] mt-4">
            Let AI do the heavy lifting — summaries, predictions, and smart suggestions built in.
          </p>
        </div>

        {/* Cell C - Uptime */}
        <div className="col-span-12 md:col-span-4 min-h-[240px] bg-[var(--accent)] border border-[var(--accent)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5">
          <div className="font-serif text-[56px] leading-none tracking-tight text-black">
            99.9%
          </div>
          <div className="font-mono text-xs text-black/60 uppercase tracking-widest mt-2">
            Uptime guarantee
          </div>
          <p className="text-sm text-black/70 mt-3">
            Enterprise-grade reliability with global CDN.
          </p>
        </div>

        {/* Cell D - Timeline view */}
        <div className="col-span-12 md:col-span-4 min-h-[240px] bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--coral)]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--coral)' }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl">Timeline view</h2>
          </div>
          
          {/* Fake Gantt Chart */}
          <div className="space-y-2">
            {[
              { name: 'Project A', progress: 75, color: 'var(--accent)' },
              { name: 'Project B', progress: 50, color: 'var(--purple)' },
              { name: 'Project C', progress: 90, color: 'var(--teal)' },
              { name: 'Project D', progress: 30, color: 'var(--coral)' },
            ].map((project) => (
              <div key={project.name} className="flex items-center gap-2">
                <div className="text-xs text-[var(--muted)] w-16 truncate">{project.name}</div>
                <div className="flex-1 bg-[var(--surface2)] h-2 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${project.progress}%`, backgroundColor: project.color }} />
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-[var(--muted)] mt-4">
            See the big picture. Drag to reschedule. Never miss a deadline.
          </p>
        </div>

        {/* Cell E - Integrations */}
        <div className="col-span-12 md:col-span-4 min-h-[240px] bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent)' }}>
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl">Integrations</h2>
          </div>
          
          {/* Integration Pills */}
          <div className="flex flex-wrap gap-2">
            {['Slack', 'GitHub', 'Figma', 'Notion', 'Linear', 'Jira'].map((integration) => (
              <span key={integration} className="text-xs bg-[var(--surface2)] border border-[var(--border)] rounded-full px-3 py-1.5 text-[var(--muted)]">
                {integration}
              </span>
            ))}
          </div>
          
          <p className="text-sm text-[var(--muted)] mt-4">
            Connect the tools your team already loves. 50+ integrations available.
          </p>
        </div>
      </div>
    </section>
  );
}
