import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Agent spec",
  description: "The public repository contract for agents that work with Together Notes.",
};

export default function AgentsPage() {
  return (
    <>
      <SiteHeader simple />
      <main className="legal-page">
        <div className="shell legal-shell">
          <p className="eyebrow">Public repository contract</p>
          <h1>Notes Repository Guide</h1>
          <p className="lede">Hand this page to any agent that reads or edits your notes. The working copy is the whole story: no database, index, API, or hidden service.</p>
          <article className="legal-copy">
            <h2>The shape of the repository</h2>
            <pre className="spec-card"><code>{`Work/\n  Projects/\n    Quarterly Plan.md\n    .Quarterly Plan/\n      b3f2a1.png\n  Ideas.md\nReading list.md`}</code></pre>
            <div className="spec-grid">
              <article><h3>Files are notes</h3><p>A note is <code>&lt;Title&gt;.md</code>. The filename is the title; directories are folders in the app.</p></article>
              <article><h3>Git stays linear</h3><p>Commit and push ordinary changes. Do not force-push, rewrite shared commits, or create merge commits.</p></article>
              <article><h3>Attachments stay close</h3><p>Attachments for <code>Plan.md</code> live in <code>.Plan/</code> beside it and use relative Markdown links.</p></article>
              <article><h3>Comments travel</h3><p>Discussions are structured HTML comment blocks anchored by their position in the Markdown file.</p></article>
            </div>
            <h2>Markdown the app understands</h2>
            <p>Together Notes reads CommonMark plus the GFM features it uses: headings, bold, italic, strikethrough, underline, inline code, links, images, bullet and numbered lists, checklists, quotes, fenced code, tables, thematic breaks, YAML frontmatter, and comments.</p>
            <h2>Safe editing rules</h2>
            <ul>
              <li>Prefer your own clone. Edit, commit, and push small changes promptly.</li>
              <li>Use <code>git mv</code> when renaming a note and its attachment folder.</li>
              <li>Never touch <code>.git</code>, force-push, or rewrite pushed history.</li>
              <li>Conflicts are last-writer-wins per file; the losing version remains reachable in history.</li>
              <li>Commit messages are prose in English, one topic per commit.</li>
            </ul>
            <h2>The complete spec</h2>
            <p>This is the compact guide. Read or download the complete, versioned contract as <a href="/agents.md">agents.md</a>, or view it in the <a href="https://github.com/dmtrkzntsv/together-notes/blob/main/Sources/NotesUI/Resources/AGENTS.md" rel="noreferrer">Together Notes repository</a>.</p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
