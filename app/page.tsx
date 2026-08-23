import type { Metadata } from "next";
import { AppStoreBadges } from "./components/AppStoreBadges";
import { PlatformShowcase } from "./components/PlatformShowcase";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Together Notes — Markdown notes in a git repo your agents can use",
  description:
    "A native Mac & iPhone notes app that stores everything as plain Markdown in a git repository you own — so your AI agents can read and write your notes.",
};

const features = [
  ["01", "The repo is the API", "Agents clone, edit, and push; Together Notes pulls and shows the change instantly. Works with every coding agent ever made — including the ones that don’t exist yet."],
  ["02", "Nothing is ever lost", "Deterministic sync with linear history. The losing side of any conflict stays reachable in git history. Same inputs, same result, on every machine."],
  ["03", "A real editor", "Headings, checklists, tables, nested lists, images, frontmatter properties — rich editing with none of the syntax on screen. Native text views, instant cold start."],
  ["04", "Sync you can explain", "Connect any git remote over HTTPS — GitHub, GitLab, your own server. Automatic commit, push, and pull. Or start local-only and connect a remote later."],
  ["05", "Made for both of you", "Point two devices, two people, or a person and an agent at one repository and work together. History is the audit trail of who changed what, when."],
  ["06", "Private by architecture", "Notes sync directly between your devices and your git host. No accounts with us, no servers of ours, no analytics. Credentials live in your keychain."],
];

const faqs = [
  ["Do I need to know git?", "No. Together Notes handles clone, commit, push, pull, and conflicts automatically. If you never open a terminal, it’s simply a fast notes app that syncs. Git is there when you — or your agents — want it."],
  ["Where are my notes stored?", "As plain Markdown files in a git repository: locally on each device, and on whatever remote you connect — GitHub, GitLab, or any git server over HTTPS. There is no Together Notes cloud."],
  ["What happens if two devices — or an agent and I — edit at once?", "Sync rebases to keep history linear and resolves conflicts deterministically: last writer wins in the working copy, and the other version stays reachable in git history. Nothing is ever silently lost. The note you’re actively editing is never overwritten under your cursor."],
  ["Is it safe to let an agent write to my notes?", "Safer than anywhere else you could let it write. Every agent change is a commit: you can see exactly what changed, and revert anything with one command. Compare that to an agent editing a database you can’t diff."],
  ["Can I use it without an agent? Without a remote?", "Yes and yes. It’s a full notes app on its own, and a local-only notebook works with no remote at all — connect one later if you want sync."],
  ["What about my existing notes?", "If they’re already Markdown files, put them in the repository — done. From other apps, export to Markdown and drop the files in. The layout is just files and folders; there’s no import format to learn."],
  ["Mac and iPhone — anything else?", "Mac, iPhone, and iPad today, one purchase for all of them. Notes are plain files in your repo, so they’re readable on any platform right now, in any editor."],
  ["Subscription?", "No. $19.99 once. Sync is included because the remote is yours."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell">
          <div className="hero-kicker"><span>Native on Mac, iPhone, and iPad</span><i /></div>
          <h1>The notes app your agents already know how to use.</h1>
          <p className="hero-copy">
            Together Notes is a native Mac and iPhone notes app whose storage is a plain-Markdown
            git repository you own. Any agent that can read files and push a commit — Claude Code,
            Cursor, a cron script — can read and write your notes.
          </p>
          <p className="hero-proof">No MCP server. No API keys. No rate limits.</p>
          <div className="hero-actions">
            <AppStoreBadges />
            <a className="text-cta" href="#demo"><span className="play">▶</span> Watch the 60-second demo</a>
          </div>
          <p className="fine-print">Free 3-day trial · $19.99 once, every device · no subscription</p>
          <PlatformShowcase />
          <p className="demo-caption">Your agent pushes a commit. Your iPhone shows the note. That’s the whole integration.</p>
        </section>

        <section className="section how-section" id="how">
          <div className="shell">
            <div className="section-heading-row"><p className="eyebrow">How it works</p><h2>A notes app on top. Plain files underneath.</h2></div>
            <div className="steps-grid">
              <article><span>1</span><h3>Your notes are files</h3><p>Every note is a plain Markdown file in a git repository — on your Mac, on your phone, and on any remote you choose. Readable in any editor, greppable, scriptable, yours forever.</p></article>
              <article><span>2</span><h3>The app is the window</h3><p>Together Notes is a fast native client on top: three panes, instant capture, rich syntax-free Markdown editing. External edits — an agent’s push, a change you made in vim — appear in the app the moment they land.</p></article>
              <article><span>3</span><h3>Git is the guarantee</h3><p>Every change, by every hand, is a commit. Sync keeps history linear, resolves conflicts deterministically, and never loses the losing side. Review anything. Revert anything.</p></article>
            </div>
          </div>
        </section>

        <section className="section stories-section">
          <div className="shell">
            <div className="section-heading-row section-heading-row--split"><div><p className="eyebrow">Use cases</p><h2>One repository. Human hands and agent hands.</h2></div><p>Anything that can edit a file can work with Together Notes.</p></div>
            <article className="story story--wide">
              <div className="story-copy"><span className="story-label">Agent → phone</span><h3>“Save that research to my notes.”</h3><p>Your agent finishes a deep-research run, writes a Markdown file, commits, pushes. Seconds later the note is on your iPhone — formatted, in the right folder, in your own repository. No copy-paste, no export, no integration to configure.</p></div>
              <div className="story-media story-media--phone"><div className="mini-terminal"><span>$ git push origin main</span><b>✓ 1 new note</b></div><img src="/screenshots/iphone-editor.webp" alt="Together Notes editor on iPhone" /></div>
            </article>
            <article className="story">
              <div className="story-media story-media--mac"><img src="/screenshots/mac-editor.webp" alt="A launch checklist in Together Notes on Mac" /><div className="check-progress"><span>3 of 5 complete</span><i /></div></div>
              <div className="story-copy"><span className="story-label">Shared checklists</span><h3>Checklists that check themselves.</h3><p>Keep a release checklist as a note and share the repository with your agent. It ticks items off as work completes; you watch the boxes fill in live on your Mac — and add new items from your phone in line at the coffee shop.</p></div>
            </article>
            <article className="story story--reverse">
              <div className="story-copy"><span className="story-label">Comments in Markdown</span><h3>Talk it through, inside the note.</h3><p>Comments in Together Notes are threaded discussions stored in the file itself. Leave a comment for your agent; it replies in the thread. The whole conversation travels with the document — in plain Markdown, forever.</p></div>
              <div className="comment-card" aria-label="Example comment thread"><div><b>you</b><time>09:41</time></div><p>Can we cut the migration step?</p><div><b>agent</b><time>09:43</time></div><p>Yes. I updated the checklist and noted why.</p><code>&lt;!-- @agent 2026-08-23 09:43 … --&gt;</code></div>
            </article>
            <div className="story-pair">
              <article><span className="story-label">Visible memory</span><h3>Agent memory you can actually read.</h3><p>Keep your agents’ working memory — AGENTS.md, project context, learned facts — as notes in the same repository. <code>git diff</code> what your agent learned today. <code>git revert</code> a hallucination. Memory stops being a black box.</p><div className="diff-card"><span>AGENTS.md</span><p>+ Prefer small, reversible changes.</p><p>+ Keep project decisions in /Context.</p></div></article>
              <article><span className="story-label">A familiar window</span><h3>Leave Apple Notes without losing what you liked about it.</h3><p>The same three-pane feel and instant capture — but your notes become files you can back up, script, and hand to any tool. Export isn’t a feature you’ll hunt for. The repository is the export.</p><img className="pair-shot" src="/screenshots/ipad-folders.webp" alt="Together Notes folders on iPad" /></article>
            </div>
          </div>
        </section>

        <section className="section feature-section" id="features">
          <div className="shell"><div className="section-heading-row"><p className="eyebrow">Built to last</p><h2>Simple architecture is the feature.</h2></div><div className="feature-grid">{features.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div>
        </section>

        <section className="agent-section" id="agents">
          <div className="shell agent-grid">
            <div className="agent-copy"><p className="eyebrow eyebrow--dark">For your agents</p><h2>Zero-integration by design.</h2><p className="agent-lead">That’s an agent writing to your notes. No SDK required.</p><ul>
              <li><strong>The repository layout is a public spec.</strong> Human-readable filenames, attachments beside each note, comments as structured HTML comment blocks. Read the spec: <a href="/agents">togethernotes.com/agents</a></li>
              <li><strong>Start in two minutes.</strong> Use the template repository and point Claude Code, Cursor, or any file-capable agent at it.</li>
              <li><strong>Safe by construction.</strong> An agent can only add commits. Diff every change and revert any of them. Your notes app now has a code review workflow.</li>
            </ul></div>
            <div className="terminal-card" aria-label="Terminal example"><div className="terminal-top"><i /><i /><i /><span>notes — zsh</span></div><pre><code><span className="prompt">$</span> git clone https://github.com/you/notes.git{"\n\n"}<span className="prompt">$</span> echo &apos;# Standup notes&apos; &gt; \{"\n"}  &quot;Work/Standup $(date +%F).md&quot;{"\n\n"}<span className="prompt">$</span> git add -A &amp;&amp; git commit \{"\n"}  -m &quot;Add standup notes&quot; &amp;&amp; git push{"\n\n"}<span className="success">✓ Note committed and pushed</span></code></pre></div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="shell pricing-shell"><p className="eyebrow">One purchase</p><div className="price-card"><div className="price-card-main"><img src="/app-icon.png" alt="Together Notes app icon" width="92" height="92" /><div><h2>$19.99. Once.</h2><p>One purchase unlocks editing forever, on Mac, iPhone, and iPad. Family Sharing included. Sync costs nothing extra, because the remote is yours.</p></div></div><div className="price-rule" /><p>Try everything free for 3 days — no account, no card. And if you never buy, your notes remain fully readable: they’re plain files in your own repository. That’s what owning your notes means.</p><AppStoreBadges /></div><p className="comparison-note">For reference: notes apps that rent you sync charge $48–96 per year for it.</p></div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-shell"><div className="faq-heading"><p className="eyebrow">FAQ</p><h2>The practical questions.</h2><p>Still wondering about something? <a href="mailto:feedback@togethernotes.com">Ask directly.</a></p></div><div className="faq-list">{faqs.map(([q, a], index) => <details key={q} open={index === 0}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div>
        </section>

        <section className="closing-section"><div className="shell closing-grid"><div><p>Your notes. Your repo. Your agents.</p><h2>Own the files. Keep the history.</h2></div><div><p>Three days free. Then $19.99, once, for every device.</p><AppStoreBadges /></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
