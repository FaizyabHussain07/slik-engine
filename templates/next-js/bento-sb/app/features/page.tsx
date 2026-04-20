// nexus — app/features/page.tsx

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturesHero />
        <FeatureSections />
        <AllFeaturesGrid />
      </main>
      <Footer />
    </>
  );
}

function FeaturesHero() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-[clamp(40px,5vw,64px)] leading-[1.1] text-[var(--text)] mb-6">
          Everything your team<br />
          needs.
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-[540px] mx-auto font-light leading-relaxed">
          Powerful features, beautifully designed.
        </p>
      </div>
    </section>
  );
}

function FeatureSections() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      {/* Feature 1 - Project Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-3xl text-[var(--text)] mb-4">
            Manage projects your way
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
            Switch between Kanban, list, and calendar views. Customize workflows to match your team's unique process. Drag, drop, and done.
          </p>
          <ul className="space-y-2">
            {['Kanban, list, and calendar views', 'Custom workflows and statuses', 'Drag-and-drop task management', 'Project templates'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--text)]">
                <span className="text-[var(--teal)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2 bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <KanbanMockup />
        </div>
      </div>

      {/* Feature 2 - Team Collaboration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <CollaborationMockup />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-[var(--text)] mb-4">
            Real-time, always in sync
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
            See who's viewing and editing in real-time. Leave comments, mention teammates, and keep conversations contextual.
          </p>
          <ul className="space-y-2">
            {['Live cursors and presence', 'Threaded comments', '@mentions and notifications', 'Activity feeds'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--text)]">
                <span className="text-[var(--teal)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Feature 3 - AI Assistant */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-3xl text-[var(--text)] mb-4">
            Your AI project manager
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
            Let AI summarize sprints, predict timelines, and suggest optimizations. Focus on shipping, not reporting.
          </p>
          <ul className="space-y-2">
            {['Sprint summaries and insights', 'Timeline predictions', 'Smart task suggestions', 'Automated reporting'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--text)]">
                <span className="text-[var(--teal)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2 bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <AIChatMockup />
        </div>
      </div>

      {/* Feature 4 - Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <ChartMockup />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-[var(--text)] mb-4">
            Data that drives decisions
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
            Track team velocity, cycle time, and bottlenecks. Export reports and share insights with stakeholders.
          </p>
          <ul className="space-y-2">
            {['Velocity and cycle time tracking', 'Custom dashboards', 'Export to PDF, CSV, Sheets', 'Historical trend analysis'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--text)]">
                <span className="text-[var(--teal)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function KanbanMockup() {
  return (
    <div className="bg-[var(--surface2)] rounded-lg p-4 border border-[var(--border)]">
      <div className="flex gap-3">
        {['Todo', 'In Progress', 'Done'].map((column) => (
          <div key={column} className="flex-1">
            <div className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-2">{column}</div>
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-[var(--surface)] border-l-2 rounded p-2 border-[var(--border)]" style={{ borderColor: ['var(--coral)', 'var(--accent)', 'var(--teal)'][i % 3] }}>
                  <div className="text-xs text-[var(--text)]">Task {i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollaborationMockup() {
  return (
    <div className="bg-[var(--surface2)] rounded-lg p-4 border border-[var(--border)]">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-[var(--purple)]/20 text-[var(--purple)] text-[8px] flex items-center justify-center border-2 border-[var(--surface2)]">
              {i}
            </div>
          ))}
        </div>
        <div className="text-xs text-[var(--muted)]">3 viewing</div>
      </div>
      <div className="bg-[var(--surface)] rounded-lg p-3 border border-[var(--border)]">
        <div className="flex gap-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] text-[8px] flex items-center justify-center">A</div>
          <div className="text-xs text-[var(--text)]">Added comment</div>
        </div>
        <div className="text-xs text-[var(--muted)]">Let's review this in the next sprint planning.</div>
      </div>
    </div>
  );
}

function AIChatMockup() {
  return (
    <div className="bg-[var(--surface2)] rounded-lg p-4 border border-[var(--border)] space-y-3">
      <div className="flex justify-end">
        <div className="bg-[var(--surface)] rounded-lg px-3 py-2 text-xs text-[var(--text)] max-w-[80%]">
          How's our sprint progress?
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-[var(--accent)]/10 border-l-2 border-[var(--accent)] rounded-lg px-3 py-2 text-xs text-[var(--text)] max-w-[90%]">
          You're at 78% completion with 4 days remaining. On track to finish early. Top blocker: Design review pending.
        </div>
      </div>
    </div>
  );
}

function ChartMockup() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const heights = [60, 80, 45, 90, 70, 40, 55];
  const colors = ['var(--accent)', 'var(--purple)', 'var(--teal)', 'var(--coral)', 'var(--accent)', 'var(--purple)', 'var(--teal)'];

  return (
    <div className="bg-[var(--surface2)] rounded-lg p-4 border border-[var(--border)] h-48 flex items-end justify-between gap-2">
      {days.map((day, i) => (
        <div key={day} className="flex-1 flex flex-col items-center gap-2">
          <div
            className="w-full rounded-t transition-all hover:opacity-80"
            style={{ height: `${heights[i]}%`, backgroundColor: colors[i] }}
          />
          <div className="text-xs text-[var(--muted)]">{day}</div>
        </div>
      ))}
    </div>
  );
}

function AllFeaturesGrid() {
  const features = [
    { title: 'Task Management', desc: 'Kanban, list, calendar views' },
    { title: 'Time Tracking', desc: 'Log hours, generate reports' },
    { title: 'File Storage', desc: '50GB, version history' },
    { title: 'Automations', desc: 'No-code workflow builder' },
    { title: 'API Access', desc: 'REST + GraphQL, webhooks' },
    { title: 'Custom Fields', desc: 'Build your own data model' },
    { title: 'Reporting', desc: 'Export to PDF, CSV, Sheets' },
    { title: 'Permissions', desc: 'Granular role-based access' },
    { title: 'Mobile Apps', desc: 'iOS + Android (coming soon)' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="font-serif text-3xl text-center text-[var(--text)] mb-12">
        All features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]"
          >
            <h3 className="font-medium text-[var(--text)] mb-2">{feature.title}</h3>
            <p className="text-sm text-[var(--muted)]">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
