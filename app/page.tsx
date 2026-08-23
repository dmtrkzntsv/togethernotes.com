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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="simple-landing">
        <section className="landing-screen screen-hero">
          <div className="shell hero-grid">
            <div className="hero-message">
              <p className="eyebrow">Native on Mac, iPhone, and iPad</p>
              <h1>The notes app your agents already know how to use.</h1>
              <p className="hero-copy">
                Together Notes stores every note as plain Markdown in a git repository you own.
                Any agent that can read files and push a commit can read and write your notes.
              </p>
              <p className="hero-proof">No MCP server. No API keys. No rate limits.</p>
              <div className="hero-actions-simple">
                <AppStoreBadges />
                <span>Free 3-day trial · $19.99 once</span>
              </div>
            </div>
            <PlatformShowcase />
          </div>
        </section>

        <section className="landing-screen screen-how" id="how">
          <div className="shell simple-section-shell">
            <div className="simple-heading">
              <p className="eyebrow">How it works</p>
              <h2>Notes on the surface. Plain files underneath.</h2>
            </div>
            <div className="simple-steps">
              <article>
                <span>01</span>
                <h3>Your notes are files</h3>
                <p>Every note is a Markdown file. Read it in any editor, search it with any tool, and keep it forever.</p>
              </article>
              <article>
                <span>02</span>
                <h3>The app is the window</h3>
                <p>Together Notes gives those files a fast native editor, folders, checklists, tables, comments, and instant capture.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Git keeps the history</h3>
                <p>Every change is a commit. Review anything, revert anything, and keep both sides of a conflict.</p>
              </article>
            </div>
            <div className="simple-proof">
              <div>
                <span className="live-dot" aria-hidden="true" />
                <strong>Agent change pulled</strong>
                <small>Your note appears on every device</small>
              </div>
              <code>write file → commit → push → done</code>
            </div>
          </div>
        </section>

        <section className="landing-screen screen-price" id="pricing">
          <div className="shell price-screen-grid">
            <div className="simple-price">
              <p className="eyebrow">One purchase</p>
              <h2>$19.99.<br />Once.</h2>
              <p>Editing forever on Mac, iPhone, and iPad. Family Sharing included. No subscription and no sync fee.</p>
              <AppStoreBadges />
              <small>Try everything free for 3 days. No account or card required.</small>
            </div>
            <div className="simple-faq" aria-label="Frequently asked questions">
              <article>
                <h3>Do I need to know git?</h3>
                <p>No. Together Notes handles syncing and conflicts automatically.</p>
              </article>
              <article>
                <h3>Where are my notes?</h3>
                <p>On your devices and on the git remote you choose. There is no Together Notes cloud.</p>
              </article>
              <article>
                <h3>Can I use it without an agent or remote?</h3>
                <p>Yes. It is a complete local notes app on its own.</p>
              </article>
              <nav className="help-links" aria-label="Help and legal">
                <a href="/support">Support →</a>
                <a href="/privacy">Privacy →</a>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
